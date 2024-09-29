import * as Vue from "@vue/runtime-core";
import { nodeOps, createNode } from "./nodeOps";
import { Component } from "@vue/runtime-core";

const renderer = Vue.createRenderer(nodeOps);

export function createApp(component: Component) {
  const app = renderer.createApp(component);
  return Object.assign({}, app, {
    mount: () => app.mount(createNode()),
  });
}
