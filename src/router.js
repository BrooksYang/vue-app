import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About';
import Table from './views/Table';
import Form from './views/Form';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    
    {
        path: '/table',
        name: 'table',
        component: Table,
    },
    
    {
        path: '/form',
        name: 'form',
        component: Form,
    },
];

export default new Router({
    routes,
});
