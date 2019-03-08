import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app/index';
import article from './modules/article/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        article
    }
});

export default store;