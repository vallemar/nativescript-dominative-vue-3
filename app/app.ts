import {createApp} from "@dominative/vue";
import {router} from "@/plugins/router";
import App from "./App.vue";
import {createPinia} from "pinia";
import {vuexStore} from "~/plugins/stores/Vuex.store";

Object.defineProperty(global, "__DEV__", {value: false});

const pinia = createPinia();


const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(vuexStore)
app.$run(document);

