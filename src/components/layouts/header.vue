<template>
    <header v-fix>
        <div class="header">
            <div class="header-left">
                <nav>
                    <div class="nav-item">
                        <router-link to="/home">首页</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link to="/tags">标签</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link to="/">aaa</router-link>
                    </div>
                </nav>
            </div>
            <div class="header-right"></div>
        </div>
    </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { throttle, getScrollTop } from '@/utils/util';

@Component({
    directives: {
        fix: {
            inserted(el) {
                let lastScrollTop = getScrollTop();
                window.addEventListener('scroll', throttle(() => {
                    let nowScrollTop = getScrollTop();
                    let delta = nowScrollTop - lastScrollTop;
                    if (delta === 0) {
                        return;
                    }
                    delta > 0 ? el.classList.add('fixed') : el.classList.remove('fixed');
                    setTimeout(() => {
                        lastScrollTop = nowScrollTop;
                    });
                }, 200));
            },
            unbind() {
                window.onscroll = null;
            }
        }
    }
})
export default class MyHeader extends Vue {
    mounted(): void {
        
    }
}
</script>

<style lang="scss">
@import '~@/styles/tools';

header {
    @include css3-prefix('transform', translateY(0));
    @include box-shadow(0, 1px, 2px, rgba(0, 0, 0, .05));
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: $header-height;
    background: $white;
    &.fixed {
        @include css3-prefix('transform', translateY(-100%));
    }
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
                display: flex;
                & > div.nav-item {
                    padding: 0 1.5rem;
                    color: $disabled;
                    &:hover {
                        color: $black;
                    }
                }
            }
        }
    }
    nav {
        a {
            color: $disabled;
            &:hover {
                color: $black;
            }
            &.router-link-active {
                color: $black;
            }
        }
    }
}
</style>
