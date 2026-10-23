import { test } from "node:test";
import assert from "node:assert/strict";
import Server, { MCPDeclarativeServer, DeclarativeMCPServer } from "../index.mjs";

test("exports MCPDeclarativeServer", () => {
  assert.equal(typeof MCPDeclarativeServer, "function");
  assert.equal(Server, MCPDeclarativeServer);
  assert.equal(DeclarativeMCPServer, MCPDeclarativeServer);
});

test("constructs a server with a declared tool", () => {
  const server = new MCPDeclarativeServer({
    name: "smoke",
    version: "0.0.1",
    tools: [["noop", {}, async () => ({ content: [] })]],
  });
  assert.ok(server);
});
