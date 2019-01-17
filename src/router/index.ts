import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import { routes } from './router';

Vue.use(VueRouter);

const routeConfig = {
    mode: 'history',
    base: '/',
    routes: routes
};

const router = new VueRouter(<RouterOptions>routeConfig);

export default router;