import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';
import article from './modules/article';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        article
    }
});

export default store;