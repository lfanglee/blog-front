import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app/index';
import article from './modules/article/index';
import tag from './modules/tag/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        app,
        article,
        tag
    }
});

export default store;