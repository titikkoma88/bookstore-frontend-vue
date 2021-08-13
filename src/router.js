import { createRouter, createWebHistory } from 'vue-router';
import Helloworld from './components/HelloWorld.vue';
import ManajemenBuku from './components/ManajemenBuku.vue';

const routes = [
    {
        path: "/",
        component: Helloworld,
    },
    {
        path: "/manajemen-buku",
        component: ManajemenBuku,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;