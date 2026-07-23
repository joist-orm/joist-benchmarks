# Joist Next Benchmark

This is an opt-in copy of `benchmark-joist-v2` for benchmarking unreleased Joist changes.

It currently uses the continuous release for [joist-orm/joist-orm#1944](https://github.com/joist-orm/joist-orm/pull/1944). The PR package is used instead of a Git workspace dependency because it includes built artifacts and references the matching WIP versions of Joist's other workspaces.

Run it explicitly alongside the released version:

```bash
yarn benchmark --orm joist_v2 joist_next --latency 0
```

`joist_next` and `joist_next_pre` are excluded from default benchmark runs.

After the PR receives a new continuous build, update the pinned WIP packages and generated entities with:

```bash
yarn workspace benchmark-joist-next update-joist
```

The command defaults to PR 1944. Pass another PR number as an argument to switch WIP branches, i.e. `yarn workspace benchmark-joist-next update-joist 1234`.
