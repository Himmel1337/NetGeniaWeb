import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'

import App from '@/App.vue'
import LoginView from "@/views/AuthSection/LoginView";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/login', name: 'login', component: LoginView },
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')

export default new VueRouter({
    router
});