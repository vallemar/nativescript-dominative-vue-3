import {createApp} from "@dominative/vue";
import { createRouter } from "nativescript-vue-router-extended";

import App from "./App.vue";
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
const router = createRouter(
    { routes },
);

const app = createApp(App);
app.use(router)
app.mount();



router.setCurrentRoute({
  component: app.component,
  path: "/app",
  meta: {
    props: {},
  },
});
