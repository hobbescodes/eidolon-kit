import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Counter: p.createTable({
    id: p.string(),
    value: p.bigint(),
  }),
}));
