import {createRouter} from "nativescript-vue-router-extended";
import Home from "@/views/Home.vue";
import Parallax from "@/views/Parallax.vue";
import RootLayout from "@/views/RootLayout.vue";


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
        path: "/root_layout",
        component: RootLayout,
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