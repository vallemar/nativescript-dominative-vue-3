import {createApp, addGlobalPlugin} from '@dominative/vue';
import App from './App.vue';
import {createPinia} from "pinia";
import {vuexStore} from "~/plugins/stores/vuex/Vuex.store";
import {router} from "~/plugins/router";

Object.defineProperty(global, '__DEV__', {value: false});

const pinia = createPinia()

addGlobalPlugin(pinia)
addGlobalPlugin(vuexStore)
addGlobalPlugin(router)

const app = createApp(App);
app.$run();