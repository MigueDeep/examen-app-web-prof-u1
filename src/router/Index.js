
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    {
        path: "/inicio",
        name: "inicio",
        component: () => import("../components/Inicio.vue"),

        children: [
            {
                path: "/form",
                name: "form",
                component: () => import("../components/Register.vue")
            },
            {
                path: "/form/table",
                name: "table",
                component: () => import("../components/Table.vue")
            }
        ]
    },
    {
        path: "/",
        name: "landing",
        component: () => import("../components/LandingPage.vue")

    }
]

const router = new VueRouter({routes, mode: "history"})
export default router;