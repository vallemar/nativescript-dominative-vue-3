import { createApp } from "@dominative/vue";
import App from "./App.vue";
import { createRouter } from "nativescript-vue-router-extended";
import Page from "./views/Page.vue";
import Test from "./views/Test.vue";
Object.defineProperty(global, "__DEV__", { value: false });

const routes = [
  {
    path: "/",
    component: Page,
  },
  {
    path: "/test",
    component: Test,
  },
];
const router = createRouter({ routes });
const app = createApp(App);
app.use(router);
app.$run(document);
