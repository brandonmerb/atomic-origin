import { defineConfig, splitVendorChunkPlugin, loadEnv, UserConfig, ConfigEnv } from 'vite'

// TSConfig Paths is mostly for package Atomic Singularity, since it uses module paths
// which confuse Vite & SWC during the build
import tsconfigPaths from 'vite-tsconfig-paths'

// SWC for vite to actually handle the rendering
import swc from 'unplugin-swc'

export default defineConfig((config: ConfigEnv): UserConfig => {
  let plugins = [
    tsconfigPaths(),
    splitVendorChunkPlugin(),
    swc.vite({
      configFile: "./.swcrc"
    })
  ]

  return {
    plugins: plugins,
    build: {
      rollupOptions: {
        preserveEntrySignatures: 'strict',
        input: {
          "main": "./src/main.ts",
        },
        output: {
          entryFileNames: '[name].js'
        },
        external: [
          /^@atomicdesign*/,
          /^node:*/
        ]
      }
    },

    clearScreen: true,
    esbuild: false,
  }
})