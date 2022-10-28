import {createApp} from "@dominative/vue";
//@ts-ignore
import App from "./App.vue";
import Page from "./views/Page.vue";

Object.defineProperty(global, "__DEV__", {value: false});


import {createRouter} from "nativescript-vue-router-extended";


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
    {routes},
);

const app = createApp(App);
app.use(router)
app.$run(document);

