import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import { dateFormat, textOverflow, getMonthNameFromIndex } from '@/utils/util';

import Icon from '@/components/icon/index.vue';

import './styles/index.scss';

Vue.component('c-icon', Icon);

Vue.filter('dateFormat', (time: string, format: string) => {
    if (!time) {
        return '';
    }
    return dateFormat(time, format);
});
Vue.filter('monthFormat', getMonthNameFromIndex);
Vue.filter('textOverflow', (text: string, lenthLimit: number) => {
    if (!text) {
        return '';
    }
    return textOverflow(text, lenthLimit);
})

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