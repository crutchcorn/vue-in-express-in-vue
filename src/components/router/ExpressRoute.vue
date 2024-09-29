
<script lang="ts" setup>
import { inject, provide } from "vue";
import {
  ExpressRouterPathSymbol,
  ExpressRouterPathSymbolVal,
  ExpressRouterSymbol,
  ExpressRouterSymbolVal,
} from "./constants";
import {RequestHandler} from "express";

function combineURLs(baseURL: string, relativeURL: string) {
  return relativeURL
      ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
      : baseURL;
}

const props = withDefaults(
    defineProps<{
      path: string;
      method?: "get" | "post" | "delete" | "use";
      function: RequestHandler;
    }>(),
    {
      method: "get",
    }
);

const { app } = inject(ExpressRouterSymbol) as ExpressRouterSymbolVal;
if (!app) {
  throw new Error("Router is not defined");
}
const inject_path: ExpressRouterPathSymbolVal =
    inject(ExpressRouterPathSymbol) || "";
const _path = combineURLs(inject_path, props.path);
provide(ExpressRouterPathSymbol, _path);

if (props.function) {
  app[props.method](_path, props.function);
}
</script>
<template>
  <slot />
</template>
