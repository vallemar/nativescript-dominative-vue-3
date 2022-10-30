import {createApp, usePlugin, applyPlugins} from '@dominative/vue';
import App from './App.vue';
import {createPinia} from "pinia";
import {vuexStore} from "~/plugins/stores/vuex/Vuex.store";
import {router} from "~/plugins/router";

Object.defineProperty(global, '__DEV__', {value: false});

const pinia = createPinia()

const app = createApp(App);
usePlugin(pinia)
usePlugin(vuexStore)
usePlugin(router)

applyPlugins(app)
app.$run();