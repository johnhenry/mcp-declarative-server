import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

/**
 * MCPDeclarativeServer is a class that extends the McpServer class.
 * It allows you to create a server with tools, prompts, and resources
 * in a declarative way.
 * @param {Object} options - The options for the server.
 * @param {string} options.name - The name of the server.
 * @param {string} options.version - The version of the server.
 * @param {Array} options.tools - The tools for the server.
 * @param {Array} options.prompts - The prompts for the server.
 * @param {Array} options.resources - The resources for the server.
 *
 */
class MCPDeclarativeServer extends McpServer {
  constructor(
    { name, version, tools = [], prompts = [], resources = [] } = {
      toos: [],
      prompts: [],
      resources: [],
    }
  ) {
    super({
      name,
      version,
      tools,
      prompts,
      resources,
    });
    for (const tool of tools) {
      this.tool(...tool);
    }
    for (const prompt of prompts) {
      this.prompt(...prompt);
    }
    for (const resource of resources) {
      this.resource(...resource);
    }
  }
}

export { MCPDeclarativeServer };
export { MCPDeclarativeServer as DeclarativeMCPServer };
export default MCPDeclarativeServer;
