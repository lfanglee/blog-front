import LoadingBarClass from './loading-bar-instance';

interface IloadingBarConfig {
    color?: string,
    failedColor?: string,
    height?: number
}

class LoadingBar {
    private loadingBarInstance;
    private color: string = 'primary';
    private failedColor: string = 'error';
    private height: number = 2;
    private timer: any;

    constructor() {
        this.loadingBarInstance = LoadingBarClass.getInstance({
            color: this.color,
            failedColor: this.failedColor,
            height: this.height
        });
    }

    private clearTimer(): void {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    private hide(): void {
        setTimeout(() => {
            this.loadingBarInstance.update({
                show: false
            });
            setTimeout(() => {
                this.loadingBarInstance.update({
                    percent: 0
                });
            }, 200);
        }, 800);
    }

    public start(): void {
        if (this.timer) {
            return;
        }
        let percent = 0;
        this.loadingBarInstance.update({
            percent,
            status: 'success',
            show: true
        });

        this.timer = setInterval(() => {
            percent += Math.floor(Math.random () * 3 + 1);
            if (percent > 95) {
                this.clearTimer();
            }
            this.loadingBarInstance.update({
                percent,
                status: 'success',
                show: true
            });
        }, 200);
    }

    public update(percent: number): void {
        this.clearTimer();
        this.loadingBarInstance.update({
            percent,
            status: 'success',
            show: true
        });
    }

    public finish(): void {
        this.clearTimer();
        this.loadingBarInstance.update({
            percent: 100,
        });
        this.hide();
    }

    public error(): void {
        this.clearTimer();
        this.loadingBarInstance.update({
            percent: 100,
            status: 'error',
            show: true
        });
        this.hide();
    }

    public destroy(): void {
        this.clearTimer();
        this.loadingBarInstance.destroy();
        this.loadingBarInstance = null;
    }
}

export default new LoadingBar();
