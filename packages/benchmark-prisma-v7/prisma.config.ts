import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "postgresql://postgres:postgres@localhost:5432/benchmark?application_name=prisma_v7",
  },
});
