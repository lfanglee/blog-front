<template>
    <transition name="fade">
        <div v-show="show" :class="classes" :style="outerStyles">
            <div :class="innerClasses" :style="styles"></div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const prefixCls = 'mc-loading-bar';

interface IloadingStyle {
    height: string,
    width: string,
    backgroundColor?: string
}

type colorType = 'primary' | 'success' | 'error';

type statusType = 'success' | 'error';

@Component
export default class LoadingBar extends Vue {
    @Prop({type: String, default: 'primary'})
    private color: colorType;

    @Prop({type: String, default: 'error'})
    private failedColor: colorType;

    @Prop({type: Number, default: 2})
    private height: number;

    public percent: number = 0;
    public status: statusType = 'success';
    public show: boolean = false;

    get classes(): string {
        return `${prefixCls}`;
    }

    get innerClasses(): Array<any> {
        return [
            `${prefixCls}-inner`,
            {
                [`${prefixCls}-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
                [`${prefixCls}-inner-failed-color-error`]: this.failedColor === 'error' && this.status === 'error'
            }
        ];
    }

    get outerStyles() {
        return {
            height: `${this.height}px`
        };
    }

    get styles() {
        let style: IloadingStyle = {
            width: `${this.percent}%`,
            height: `${this.height}px`
        };
        if (this.color !== 'primary' && this.status === 'success') {
            style.backgroundColor = this.color;
        }
        if (this.failedColor !== 'error' && this.status === 'error') {
            style.backgroundColor = this.failedColor;
        }

        return style;
    }
}
</script>
