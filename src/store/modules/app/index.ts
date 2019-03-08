import { SET_MOBILE_LAYOUT } from '../../mutation-types';
import { AppState } from './interface';

const app = {
    namespaced: true,
    state: {
        mobileLayout: false,
    },
    mutations: {
        [SET_MOBILE_LAYOUT](state: AppState, payload: { action: boolean}): void {
            state.mobileLayout = payload.action;
        }
    }
};

export default app;