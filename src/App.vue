<template>
    <div id="main" class="app-main">
        <my-header />
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import MyHeader from '@/components/layouts/header.vue';

@Component({
    components: {
        MyHeader
    }
})
export default class App extends Vue {
    
}
</script>
