// import { createApp } from 'vue'
// import App from './App.vue'
//
// createApp(App).mount('#app')

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from '@/App.vue'

import AboutView from "@/views/AuthSection/AboutView";
import LoginView from "@/views/AuthSection/LoginView";
import ContactView from "@/views/AuthSection/ContactView";
import FAQView from "@/views/AuthSection/FAQView";
import HomeView from "@/views/AuthSection/HomeView";
import ServicesView from "@/views/AuthSection/ServicesView";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/login', name: 'login', component: LoginView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/contact', name: 'contact', component: ContactView },
        { path: '/faq', name: 'faq', component: FAQView },
        { path: '/home', name: 'home', component: HomeView },
        { path: '/services', name: 'services', component: ServicesView },

    ]
});

// router.addRoute('admin', { path: '/login', component: LoginView })

const app= createApp(App)

app.use(router)

app.mount('#app')