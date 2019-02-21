<template>
    <div class="page-welcome">
        
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
    mounted(): void {
        
    }

    handleJumpNotFound(): void {
        this.$router.push({
            path: '/404'
        });
    }
}
</script>

<style lang="scss" scoped>
.page-welcome {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('../images/Wallions284236.jpg') no-repeat center 80%;
    background-size: cover;
}
</style>

