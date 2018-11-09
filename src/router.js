import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About';
import Table from './views/Table';

Vue.use(Router);

const routes = [
    {
        path: '/home',
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
];

export default new Router({
    routes,
});
