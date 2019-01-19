<template>
    <div class="page-welcome">
        welcome
        <button @click="handleJumpNotFound">
            404
        </button>
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
