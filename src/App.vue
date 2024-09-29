<script lang="ts" setup>
import {
  ExpressProvider,
} from "./components/router";
import RootRoutes from "./routes/RootRoutes.vue";
import APIRoutes from "./routes/APIRoutes.vue";
</script>

<template>
  <ExpressProvider :port="8080">
    <RootRoutes />
    <APIRoutes />
  </ExpressProvider>
</template>
