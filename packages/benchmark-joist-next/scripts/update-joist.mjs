import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

await main();

/**
 * Pin Joist Next to a PR's latest immutable continuous-release package.
 *
 * Yarn caches stable HTTP package URLs, so resolving the PR number directly does not
 * reliably pick up new builds. Pinning the current commit gives every build a new URL.
 */
async function main() {
  const pr = process.argv[2] ?? "1944";
  if (!/^\d+$/.test(pr)) throw new Error(`Expected a PR number, received ${pr}`);

  const sha = await getPullRequestHead(pr);
  const packageUrl = `https://pkg.pr.new/joist-orm/joist-orm/joist-orm@${sha}`;
  await assertPackageExists(packageUrl, pr, sha);
  const packageJsonUrl = new URL("../package.json", import.meta.url);
  const packageJson = JSON.parse(await readFile(packageJsonUrl, "utf8"));
  packageJson.dependencies["joist-orm"] = packageUrl;
  await writeFile(packageJsonUrl, `${JSON.stringify(packageJson, undefined, 2)}\n`);

  const rootDir = fileURLToPath(new URL("../../..", import.meta.url));
  console.log(`Updating Joist Next to PR #${pr} at ${sha}`);
  execFileSync("yarn", ["install"], { cwd: rootDir, stdio: "inherit" });
  execFileSync("yarn", ["workspace", "benchmark-joist-next", "codegen"], { cwd: rootDir, stdio: "inherit" });
}

/** Return the latest commit SHA for a GitHub pull request. */
async function getPullRequestHead(pr) {
  const headers = { Accept: "application/vnd.github+json", "User-Agent": "joist-benchmarks" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const response = await fetch(`https://api.github.com/repos/joist-orm/joist-orm/pulls/${pr}`, { headers });
  if (!response.ok) throw new Error(`GitHub returned ${response.status} while resolving PR #${pr}`);

  const body = await response.json();
  if (typeof body.head?.sha !== "string") throw new Error(`GitHub did not return a head commit for PR #${pr}`);
  return body.head.sha;
}

/** Ensure pkg.pr.new has finished publishing the commit before changing the dependency. */
async function assertPackageExists(packageUrl, pr, sha) {
  const response = await fetch(packageUrl, { method: "HEAD" });
  if (!response.ok) {
    throw new Error(`The continuous package for PR #${pr} at ${sha} is not available yet (${response.status})`);
  }
}
