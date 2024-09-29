<script lang="ts" setup>
import {
  ExpressProvider,
} from "./components/router";
import ExpressRoutes from "./routes/ExpressRoutes.vue";
</script>

<template>
  <ExpressProvider :port="8080">
    <ExpressRoutes />
  </ExpressProvider>
</template>
