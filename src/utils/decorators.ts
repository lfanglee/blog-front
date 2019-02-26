import { throttle as throttleFn, debounce as debounceFn } from './util';

interface DebounceOptions {
    immediate: boolean
}

function debounce(wait: number = 1000, options: DebounceOptions = { immediate: false }) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originMethod = descriptor.value;
        descriptor.value = debounceFn(originMethod, wait, !!options.immediate);
        return descriptor;
    };
}

function throttle(wait: number = 1000) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originMethod = descriptor.value;
        descriptor.value = throttleFn(originMethod, wait);
        return descriptor;
    };
}

export {
    debounce,
    throttle
};
