import { SET_MOBILE_LAYOUT } from '../mutation-types';

type AppState = {
    mobileLayout: boolean
};
type SetMobileLayoutPayload = {
    action: boolean
};

const app = {
    namespaced: true,
    state: {
        mobileLayout: false,
    },
    mutations: {
        [SET_MOBILE_LAYOUT](state: AppState, payload: SetMobileLayoutPayload): void {
            state.mobileLayout = payload.action;
        }
    }
};

export default app;