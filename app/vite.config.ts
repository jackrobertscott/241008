import vite_plugin_preact from "@preact/preset-vite"
import { defineConfig } from "vite"

export default defineConfig({
  server: {port: 3000},
  esbuild: {
    legalComments: "none", // remove comments from built code
    keepNames: true, // function.name properties turned to literals
  },
  plugins:[vite_plugin_preact()]
})