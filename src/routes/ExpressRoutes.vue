<script lang="ts" setup>
import { ExpressRoute } from "../components/router";
import { Request, Response } from "express";

const handleRoot = (req: Request, res: Response) => {
  res.send(
      '<html><head><title>Express Inside of Vue</title></head><body><p>Testing!</p></body></html>'
  );
};
</script>

<template>
  <ExpressRoute path="/" method="get" :function="handleRoot" />
</template>
