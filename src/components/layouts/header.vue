<template>
    <header>
        <div class="header">
            <div class="header-left">
                <nav>
                    <router-link to="/home">首页</router-link>
                    <router-link to="/tags">标签</router-link>
                    <router-link to="/">aaa</router-link>
                </nav>
            </div>
            <div class="header-right"></div>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MyHeader extends Vue {
    mounted(): void {
        
    }
}
</script>

<style lang="scss">
@import '~@/styles/index';

header {
    @include css3-prefix('transform', translateY(0));
    @include box-shadow(0, 1px, 2px, rgba(0, 0, 0, .05));
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: $header-height;
    background: $white;
    & > .header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: $container-width;
        height: $header-height;
        padding: 0 $lg-pad;
        line-height: $header-height;
        & > .header-left {
            nav {
                & > a {
                    margin-right: 2.25rem;
                    color: $disabled;
                    &:hover {
                        color: $black;
                    }
                }
            }
        }
    }
}
</style>