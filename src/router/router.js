import Main from "@/pages/Main.vue";
import {createRouter,createWebHistory} from "vue-router";
import rent from "@/pages/rent.vue";
import washer from "@/pages/washer.vue";
import pumpingout from "@/pages/pumpingout.vue";
import tires from "@/pages/tires.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Аренда',
        component: rent
    },
    {
        path: '/Омывайка',
        component: washer
    },
    {
        path: '/Откачка',
        component: pumpingout
    },
    {
        path: '/Шины',
        component: tires
    }

]

const router = createRouter ({
    routes,
    history: createWebHistory()

})
export default router;