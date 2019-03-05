<template>
    <header v-fix :class="{mobile: mobileLayout}">
        <div class="header">
            <div class="header-left">
                <nav>
                    <div v-for="(item, index) in nav" :key="index" class="nav-item">
                        <router-link :to="item.path">{{ item.name }}</router-link>
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

interface RouterLink {
    path: string,
    name: string
}

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
    nav: Array<RouterLink> = [
        { path: '/home', name: '文章' },
        { path: '/tags', name: '归档' },
        { path: '/about', name: '关于我' }
    ];
    get mobileLayout(): boolean {
        return this.$store.state.app.mobileLayout;
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

header {
    @include css3-prefix('transform', translateY(0));
    @include box-shadow(0, 1px, 2px, 0, rgba(0, 0, 0, .05));
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
