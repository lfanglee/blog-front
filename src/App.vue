<template>
    <div id="main" class="app-main">
        <my-header />
        <router-view></router-view>
        <my-footer />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MyHeader from '@/components/layouts/header.vue';
import MyFooter from '@/components/layouts/footer.vue';

@Component({
    components: {
        MyHeader,
        MyFooter
    }
})
export default class App extends Vue {
    
}
</script>
