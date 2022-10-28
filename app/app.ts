import {createApp} from "@dominative/vue";
import {router} from "@/plugins/router";
import App from "./App.vue";

Object.defineProperty(global, "__DEV__", {value: false});

const app = createApp(App);
app.use(router)
app.$run(document);

