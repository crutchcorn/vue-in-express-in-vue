<script lang="ts" setup>
import { provide } from "vue";
import {
  ExpressRouterPathSymbol,
  ExpressRouterPathSymbolVal,
  ExpressRouterSymbol,
  ExpressRouterSymbolVal,
} from "./constants";
import express from "express";

const props = defineProps<{
  port: number;
}>();

const app = express();
const server = app.listen(props.port, function () {
  console.log(`Express server listening on port ${props.port}!`);
});

provide(ExpressRouterSymbol, { app, server } as ExpressRouterSymbolVal);
provide(ExpressRouterPathSymbol, "" as ExpressRouterPathSymbolVal);
</script>

<template>
  <slot />
</template>
