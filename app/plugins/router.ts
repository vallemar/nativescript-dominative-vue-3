import {createRouter} from "nativescript-vue-router-extended";
import Home from "@/views/Home.vue";
import Parallax from "@/views/Parallax.vue";


const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/parallax",
        component: Parallax,
    }
];

const router = createRouter(
    {routes},
    {
        logger: console,
    }
);

export {
    router
}