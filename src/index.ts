import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import './styles/index.scss';

new Vue({
    router,
    store,
    el: '#app',
    created() {
        
    },
    mounted() {
        
    },
    render: h => h(App)
});