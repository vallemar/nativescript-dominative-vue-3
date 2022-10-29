import { createApp, usePlugin } from "@dominative/vue";
import { router } from "@/plugins/router";
import App from "./App.vue";
import { createPinia } from "pinia";
import { vuexStore } from "~/plugins/stores/Vuex.store";

Object.defineProperty(global, "__DEV__", { value: false });

const pinia = createPinia();
usePlugin(router);
usePlugin(pinia);
usePlugin(vuexStore);

const app = createApp(App);
//@ts-ignore
app.$run();
