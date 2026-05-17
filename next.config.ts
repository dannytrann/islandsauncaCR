import type { NextConfig } from "next";
import path from "path";

// /home/dtran has its own package.json (for vercel/claude CLIs), which causes
// @tailwindcss/node's enhanced-resolve to start from /home/dtran and miss the
// project's node_modules when the PostCSS `from` option is unset. Prepend the
// project's node_modules to NODE_PATH so the resolver finds tailwindcss from
// any context. Must be set before webpack/PostCSS workers start.
const projectModules = path.resolve(__dirname, "node_modules");
const sep = process.platform === "win32" ? ";" : ":";
if (!process.env.NODE_PATH?.split(sep).includes(projectModules)) {
  process.env.NODE_PATH = process.env.NODE_PATH
    ? `${projectModules}${sep}${process.env.NODE_PATH}`
    : projectModules;
}

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  webpack: (config) => {
    config.resolve.modules = [
      path.join(__dirname, "node_modules"),
      ...(config.resolve.modules ?? []),
    ];
    return config;
  },
};

export default nextConfig;
