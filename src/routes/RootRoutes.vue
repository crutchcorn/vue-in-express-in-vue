<script lang="ts" setup>
import express, { Request, Response } from "express";
import {join, dirname} from "path";
import { fileURLToPath } from 'url';
import { renderToString } from 'vue/server-renderer'
import { ExpressRoute } from "../components/router";
import { createApp } from '../../public/app'
import { getIndexHtml } from '../constants/index.html'

const __dirname = dirname(fileURLToPath(import.meta.url));

const handleIndex = (req: Request, res: Response) => {
  const app = createApp();
  renderToString(app).then(html => {
    res.send(getIndexHtml(html))
  }).catch(reason => {
    res.status(500).send(reason);
  })
};

const handleRoot = express.static(
    join(__dirname, "../public")
);
</script>

<template>
  <ExpressRoute path="/" method="get" :function="handleIndex" />
  <ExpressRoute path="/" method="use" :function="handleRoot" />
</template>
