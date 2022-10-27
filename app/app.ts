import { createApp } from "./nativescript-vue";
//@ts-ignore
import App from "./App.vue";
//@ts-ignore
import Page from "./views/Page.vue";
import { createRouter } from "nativescript-vue-router-extended";
//@ts-ignore
Object.defineProperty(global, "__DEV__", { value: false });

const routes = [
  {
    path: "/app",
    component: App,
  },
  {
    path: "/page",
    component: Page,
  },
];
const app = createApp(App);
app.mount();
const router = createRouter(
  { routes },
  {
    vm: app,
  }
);
