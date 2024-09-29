import { createApp } from "./renderer";
import App from "./App.vue";
import exitHook from 'exit-hook';
import {provideStoreToApp} from "@reduxjs/vue-redux";
import {store} from "../public/store";

const app = createApp(App);
provideStoreToApp(app, {store})
app.mount();

// Keep the process alive until we tell it to stop
const interval = setInterval(() => {}, 1 << 30);

exitHook((signal) => {
  console.log("Giving one second to cleanly exit");
  app.unmount();
  clearInterval(interval);
  setTimeout(() => {
    console.log("Process fully exited");
    // calling process.exit() won't inform parent process of signal
    process.kill(process.pid, signal || undefined);
  }, 1000);
  return false;
});
