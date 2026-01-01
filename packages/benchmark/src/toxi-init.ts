export async function setToxiproxyLatency(millis: number) {
  await post("/reset");
  if (millis > 0) {
    await post("/proxies/postgres/toxics", {
      name: "latency_downstream",
      type: "latency",
      stream: "downstream",
      attributes: { latency: millis },
    });
  }
  // console.log(`toxiproxy configured with ${millis}ms latency`);
}

async function post(path: string, data: object = {}): Promise<void> {
  const res = await fetch(`http://localhost:8474${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`${path} failed with status: ${res.status}`);
}

/** Fetch toxiproxy metrics and return the upstream received bytes for the postgres proxy. */
export async function getBytesSent(): Promise<number> {
  const res = await fetch("http://localhost:8474/metrics");
  if (!res.ok) throw new Error(`/metrics failed with status: ${res.status}`);
  const text = await res.text();
  // Look for: toxiproxy_proxy_received_bytes_total{direction="upstream",...,proxy="postgres",...} VALUE
  // https://github.com/Shopify/toxiproxy/blob/main/METRICS.md#proxy-metrics
  const match = text.match(
    /toxiproxy_proxy_received_bytes_total\{[^}]*direction="upstream"[^}]*proxy="postgres"[^}]*\}\s+([\d.e+-]+)/,
  );
  if (!match) {
    console.error("Metrics response:", text);
    throw new Error("Could not find upstream received bytes in toxiproxy metrics");
  }
  return Number(match[1]);
}
