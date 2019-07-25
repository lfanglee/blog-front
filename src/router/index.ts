import Vue from 'vue';
import VueRouter, { RouterOptions, Route } from 'vue-router';
import { routes } from './router';
import LoadingBar from '@/components/loading-bar/index';
import { Position } from 'vue-router/types/router';

Vue.use(VueRouter);

const routeConfig: RouterOptions = {
    mode: 'history',
    base: '/',
    routes: routes,
    scrollBehavior (_to: Route, _from: Route, _savedPosition: Position) {
        return { x: 0, y: 0 };
    }
};

const router = new VueRouter(routeConfig);

router.beforeEach((to: Route, _from: Route, next) => {
    LoadingBar.start();
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

router.afterEach((_to: Route) => {
    LoadingBar.finish();
});

export default router;