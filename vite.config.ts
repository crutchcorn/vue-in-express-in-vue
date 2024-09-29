import { UserConfig, Plugin } from "vite";
import pluginVue from "@vitejs/plugin-vue";

function patchPluginWithoutSSR(plugin: Plugin): Plugin {
  const _transform = plugin.transform;
  const _load = plugin.load;
  plugin.transform = function (code: never, id: never) {
    return (_transform as Function).call(_transform, code, id, { ssr: false });
  };
  plugin.load = function (id: never) {
    return (_load as Function).call(_load, id, { ssr: false });
  };
  return plugin;
}

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    patchPluginWithoutSSR(pluginVue() as never)
  ],
  build: {
    minify: false,
    rollupOptions: {
      entry: "src/main.ts",
    },
  },
} as UserConfig;
