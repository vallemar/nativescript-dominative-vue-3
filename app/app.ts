import { createApp } from "@dominative/vue";
//@ts-ignore
import App from "./App.vue";
//@ts-ignore
import Page from "./views/Page.vue";
import { createRouter } from "nativescript-vue-router-extended";
import { install } from "./plugins/navigation";
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

app.$run();
const router = createRouter(
  { routes },
  {
    vm: app,
    logger: console,
    frame: app._container,
  }
);
router.setCurrentRoute({
  component: app.component,
  path: "/app",
  meta: {
    props: {},
  },
});
