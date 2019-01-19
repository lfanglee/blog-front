import LoadingBar from './loading-bar.vue';
import Vue from 'vue';

interface IloadingBarProps {
    show?: boolean,
    percent?: number,
    status?: string
}

interface IloadingBarConfig {
    color?: string,
    failedColor?: string,
    height?: number
}

type loadingBarOptions = IloadingBarConfig | IloadingBarProps;

export default class LoadingBarInstanc {
    private constructor() { }

    static getInstance(props: loadingBarOptions = {}): Object {
        const instance = new Vue({
            data: props,
            render(h) {
                return h(LoadingBar, {
                    props
                })
            }
        });

        const component = instance.$mount();
        document.body.appendChild(component.$el);
        const loadingBar = instance.$children[0];

        return {
            update(options: IloadingBarProps) {
                if ('percent' in options) {
                    (<any>loadingBar).percent = options.percent;
                }
                if (options.status) {
                    (<any>loadingBar).status = options.status;
                }
                if ('show' in options) {
                    (<any>loadingBar).show = options.show;
                }
            },
            destroy() {
                document.body.removeChild(document.getElementsByClassName('mc-loading-bar')[0]);
            }
        };
    }
}
