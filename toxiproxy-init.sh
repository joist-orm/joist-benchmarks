#!/bin/sh

curl -X POST http://localhost:8474/reset
curl -X POST http://localhost:8474/proxies/postgres/toxics -d '{
  "name": "latency_downstream",
  "type": "latency",
  "stream": "downstream",
  "attributes": { "latency": 5 }
}'

