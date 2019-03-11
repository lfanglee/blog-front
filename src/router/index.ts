import Vue from 'vue';
import VueRouter, { RouterOptions } from 'vue-router';
import { routes } from './router';
import LoadingBar from '@/components/loading-bar/index';

Vue.use(VueRouter);

const routeConfig = {
    mode: 'history',
    base: '/',
    routes: routes,
    scrollBehavior (_to: any, _from: any, _savedPosition: any) {
        return { x: 0, y: 0 };
    }
};

const router = new VueRouter(<RouterOptions>routeConfig);

router.beforeEach((_to, _from, next) => {
    LoadingBar.start();
    next();
});

router.afterEach((_to) => {
    LoadingBar.finish();
});

export default router;