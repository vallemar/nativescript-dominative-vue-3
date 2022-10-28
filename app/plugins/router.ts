import Home from "@/views/Home.vue";
import Parallax from "@/views/Parallax.vue";
import PageExample from "@/views/PageExample.vue";

import {createRouter} from "nativescript-vue-router-extended";


const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/parallax",
        component: Parallax,
    },
    {
        path: "/example",
        component: PageExample,
    }
];

const router = createRouter(
    {routes},
);

export {
    router
}