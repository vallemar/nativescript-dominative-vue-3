import {createRouter} from "router-vue-native";
import Home from "@/views/Home.vue";
import Parallax from "@/views/Parallax.vue";
import RootLayout from "@/views/RootLayout.vue";
import ListView from "@/views/ListView.vue";


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
    },
    {
        path: "/list",
        component: ListView,
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