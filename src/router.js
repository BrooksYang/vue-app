import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About';

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
    }
];

export default new Router({
    routes,
});
