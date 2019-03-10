<template>
    <footer :class="{mobile: mobileLayout}">
        <div class="container">
            <p class="icp">
                <time>©{{ new Date().getFullYear() }}</time>
                <span class="hr"></span>
                <a href="mailto:im.lfanglee@gmail.com" _target="_blank">邮箱</a>
                <span class="hr"></span>
                <a href="https://github.com/kindboy" _target="_blank">Github</a>
                <span class="hr"></span>
                <span>RSS</span>
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MyFooter extends Vue {
    get mobileLayout(): boolean {
        return this.$store.state.app.mobileLayout;
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

footer {
    margin-top: $normal-pad;
    padding: $normal-pad 0;
    background: $white;
    border-top: 1px solid $border-color;
    color: $text;
    > .container {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
