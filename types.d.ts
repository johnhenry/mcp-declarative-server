/**
 * Type definitions for mcp-declarative-server
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export type ToolHandler = (params: any) => Promise<any>;
export type PromptHandler = (params: any) => Promise<any>;
export type ResourceHandler = () => Promise<any>;

export type ToolDefinition = [
  name: string,
  paramSchema: Record<string, any>,
  handler: ToolHandler,
  description?: string
];

export type PromptDefinition = [
  name: string,
  paramSchema: Record<string, any>,
  handler: PromptHandler,
  description?: string
];

export type ResourceDefinition = [uri: string, handler: ResourceHandler];

export interface MCPDeclarativeServerOptions {
  name: string;
  version: string;
  tools: ToolDefinition[];
  prompts: PromptDefinition[];
  resources: ResourceDefinition[];
}

/**
 * MCPDeclarativeServer is a class that extends the McpServer class.
 * It allows you to create a server with tools, prompts, and resources
 * in a declarative way.
 */
export class MCPDeclarativeServer extends McpServer {
  constructor(options: MCPDeclarativeServerOptions);
}
export type DeclarativeMCPServer = typeof MCPDeclarativeServer;
declare module "mcp-declarative-server" {
  // Adjust the parameter and return types based on the actual implementation
  export default MCPDeclarativeServer;
  export { MCPDeclarativeServer, DeclarativeMCPServer };
}
