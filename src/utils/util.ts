const now = Date.now || (() => new Date().getTime());

const debounce = function (fn: Function, wait: number = 1000, immediate: boolean = false) {
    let timeout: any;
    const debounced = function (...args: any[]) {
        if (timeout) {
            clearTimeout(timeout);
        }
        immediate && !timeout && fn(...args);
        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
    debounced.cancel = () => {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
};

const throttle = function (fn: Function, wait: number = 1000) {
    let timeout: any;
    let lastTime: number = now();
    const throttled = function (...args: any[]) {
        if (timeout) {
            clearTimeout(timeout);
        }
        const nowTime = now();
        if (!lastTime || nowTime - lastTime >= wait) {
            fn.apply(this, args);
            lastTime = nowTime;
        } else {
            timeout = setTimeout(() => {
                fn(...args);
            }, wait);
        }
    };
    throttled.cancel = () => {
        clearTimeout(timeout);
        lastTime = null;
        timeout = null;
    };
    return throttled;
};

const getScrollTop = function (): number {
    return document.documentElement.scrollTop
        || window.pageYOffset
        || window.scrollY
        || document.body.scrollTop;
};

const setScrollTop = function (scrollTop): void {
    document.scrollingElement.scrollTop = scrollTop;
}

export {
    debounce,
    throttle,
    getScrollTop,
    setScrollTop
};
