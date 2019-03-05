import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import Icon from '@/components/icon/index.vue';

import './styles/index.scss';

Vue.component('m-icon', Icon);

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