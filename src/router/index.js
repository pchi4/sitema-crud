import { createRouter, createWebHistory } from "vue-router"


const routes =[
    {
        path: '/',
        name: 'Home',
        component: () => import ('../views/Home.vue')
    },
    {
        path: '/cadastro',
        name: 'CadastroTask',
        component: () => import ('../views/CadastroTask.vue')
    },
    {
        path: '/tarefas',
        name: 'TarefasCadastradas',
        component: () => import ('../views/TarefasCadastradas.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router