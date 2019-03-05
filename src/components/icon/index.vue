<template>
    <i class="iconfont" :class="'icon-' + type"></i>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Icon extends Vue {
    @Prop({
        type: String,
        required: true
    })
    type: string;
}
</script>
