import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import { routes } from './router';
import LoadingBar from '@/components/loading-bar/index';

Vue.use(VueRouter);

const routeConfig = {
    mode: 'history',
    base: '/',
    routes: routes
};

const router = new VueRouter(<RouterOptions>routeConfig);

router.beforeEach((to, from, next) => {
    LoadingBar.start();
    next();
});

router.afterEach((to) => {
    // LoadingBar.finish();
});

export default router;