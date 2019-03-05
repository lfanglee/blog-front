import { SET_MOBILE_LAYOUT } from '../mutation-types';

interface AppState {
    mobileLayout: boolean
}

const app = {
    state: {
        mobileLayout: false,
    },
    mutations: {
        [SET_MOBILE_LAYOUT](state: AppState, action: boolean): void {
            state.mobileLayout = action;
        }
    }
};

export default app;