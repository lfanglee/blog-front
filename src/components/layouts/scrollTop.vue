<template>
    <transition-group
        tag="div"
        name="fade"
        class="scroll-aside"
        :class="{mobile: mobileLayout}">
        <a v-if="showScroll" key="1" class="scroll-btn" href="javascript:void(0)" @click="scrollTop">
            <c-icon type="arrow-up"></c-icon>
        </a>
    </transition-group>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { getScrollTop, setScrollTop } from '@/utils/util';

@Component
export default class Scroll extends Vue {
    showScroll: boolean = false;
    get mobileLayout(): boolean {
        return this.$store.state.app.mobileLayout;
    }
    mounted(): void {
        window.addEventListener('scroll', () => {
            this.showScroll = getScrollTop() > 1.2 * window.innerHeight;
        });
    }
    scrollTop(): void {
        let timer = null;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(() => {
            let curTop = getScrollTop();
            if (curTop > 0) {
                setScrollTop(curTop - 150);
                this.scrollTop();
            } else {
                cancelAnimationFrame(timer);
            }
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/tools';

.scroll-aside {
    position: fixed;
    right: 0;
    bottom: 8rem;
    & > .scroll-btn {
        display: block;
        width: $xlg-pad;
        height: $xlg-pad;
        margin-bottom: .5rem;
        color: #5ab95c;
        background: $module-bg;
        text-align: center;
        line-height: 2.7rem;
        @include box-shadow(
            $x: 0,
            $y: 2px,
            $blur: 4px,
            $color: rgba(0, 0, 0, .14)
        );
        border-color: 1px solid $border-color;
        cursor: pointer;
    }
}
</style>
