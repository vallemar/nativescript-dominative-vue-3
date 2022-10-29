import Home from "@/views/Home.vue";
import Parallax from "@/views/Parallax.vue";
import TestPage1 from "@/views/TestPage1.vue";
import TestPage2 from "@/views/TestPage2.vue";

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
        path: "/test",
        component: TestPage1,
    },
    {
        path: "/test2",
        component: TestPage2,
    },
];

const router = createRouter(
  { routes },
  {
    logger: console,
  }
);

export {
    router
}