<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {
    
}
</script>

<style lang="scss">
@import './styles/common.scss';
html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f0f0f0;
}
.app-main {
    width: 100%;
    height: 100%;
}
</style>
