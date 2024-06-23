/** @knipignore */
import { ponder } from "@/generated";
import { graphql } from "@ponder/core";
import { cors } from "hono/cors";

ponder.use("*", cors());

ponder.use("/graphql", graphql());
