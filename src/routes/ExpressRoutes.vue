<script lang="ts" setup>
import express, { Request, Response } from "express";
import {join, dirname} from "path";
import { fileURLToPath } from 'url';
import { renderToString } from 'vue/server-renderer'
import { ExpressRoute } from "../components/router";
import { createApp } from '../../public/app.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

const handleIndex = (req: Request, res: Response) => {
  const app = createApp();
  renderToString(app).then(html => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Vue in Express in Vue Example</title>
        <script type="importmap">
          {
            "imports": {
              "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
            }
          }
        <\/script>
        <script type="module" src="/client.js"><\/script>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
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
