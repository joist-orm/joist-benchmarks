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
  console.log(`toxiproxy configured with ${millis}ms latency`);
}

async function post(path: string, data: object = {}): Promise<void> {
  const res = await fetch(`http://localhost:8474${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`${path} failed with status: ${res.status}`);
}
