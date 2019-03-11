<template>
    <div id="main" class="app-main">
        <my-header />
        <scroll-top />
        <div class="main-container">
            <router-view></router-view>
        </div>
        <my-footer />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MyHeader from '@/components/layouts/header.vue';
import MyFooter from '@/components/layouts/footer.vue';
import ScrollTop from '@/components/layouts/scrollTop.vue';

@Component({
    components: {
        MyHeader,
        MyFooter,
        ScrollTop
    }
})
export default class App extends Vue {
    
}
</script>
