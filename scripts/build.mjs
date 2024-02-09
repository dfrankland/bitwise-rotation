import esbuild from "esbuild"

esbuild.build({
  format: "iife",
  globalName: "BitwiseRotation",
  platform: "browser",
  target: ["esnext"],
  bundle: true,
  entryPoints: ["src/index.js"],
  outdir: "dist",
});
