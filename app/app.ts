import {createApp} from './nativescript-vue';
import {createPinia} from "pinia";
import App from './App.vue';

Object.defineProperty(global, '__DEV__', {value: false});

const pinia = createPinia()

const app = createApp(App);
app.use(pinia)
app.mount();