/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '', // Default to empty string if not defined
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
};

export default config;
