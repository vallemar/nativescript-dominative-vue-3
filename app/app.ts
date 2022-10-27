import { createApp } from "@dominative/vue";
//@ts-ignore
import App from "./App.vue";
//@ts-ignore
import { createRouter } from "nativescript-vue-router-extended";
import Page from "./views/Page.vue";
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

app.$run(document);

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
