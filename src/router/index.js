//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'siswi.index',
        component: () => import( /* webpackChunkName: "siswi.index" */ '@/views/siswi/Index.vue')
    },
    {
        path: '/create',
        name: 'siswi.create',
        component: () => import( /* webpackChunkName: "siswi.create" */ '@/views/siswi/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'siswi.edit',
        component: () => import( /* webpackChunkName: "siswi.edit" */ '@/views/siswi/Edit.vue')
    },
    {
        path: '/',
        name: 'siswa.index',
        component: () => import( /* webpackChunkName: "siswa.index" */ '@/views/siswa/Index.vue')
    },
    {
        path: '/create',
        name: 'siswa.create',
        component: () => import( /* webpackChunkName: "siswa.create" */ '@/views/siswa/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'siswa.edit',
        component: () => import( /* webpackChunkName: "siswa.edit" */ '@/views/siswa/Edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router