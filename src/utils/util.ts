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

const setScrollTop = function (scrollTop: number): void {
    document.scrollingElement.scrollTop = scrollTop;
};

const dateFormat = (times: string, format: string) => {
    const time = Date.parse(times);
    const fromNow = (Date.now() - time) / 1000;
    if (fromNow < 60) {
        return '刚刚';
    } else if (fromNow < 60 * 60) {
        return `${~~(fromNow / 60)}分钟前`;
    } else if (fromNow < 60 * 60 * 24) {
        return `${~~(fromNow / 3600)}小时前`;
    }

    const date = new Date(time);
    const obj = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let key in obj) {
        if (new RegExp('(' + key + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[key] : ('00' + obj[key]).substr(('' + obj[key]).length));
        }
    }
    return format;
};

export {
    debounce,
    throttle,
    getScrollTop,
    setScrollTop,
    dateFormat
};
