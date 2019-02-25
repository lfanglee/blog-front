const now = Date.now || (() => new Date().getTime());

const debounce = (fn: Function, wait: number = 1000, immediate: boolean = false) => {
    let timeout: any;
    const debounced = (...args: any[]) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        immediate && !timeout && fn(...args);
        timeout = setTimeout(() => {
            fn(...args);
        }, wait);
    };
    debounced.cancel = () => {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
};

const throttle = (fn: Function, wait: number = 1000) => {
    let timeout: any;
    let lastTime: number = now();
    return (...args: any[]) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        const nowTime = now();
        if (!lastTime || nowTime - lastTime >= wait) {
            fn(...args);
            lastTime = nowTime;
        } else {
            timeout = setTimeout(() => {
                fn(...args);
            }, wait);
        }
    };
};

export {
    debounce,
    throttle
};
