import { getAllTags } from '@/services/service';
import { GetAllTagsParams} from '@/services/interface';
import { SET_TAG } from '../../mutation-types';
import { Tag, TagState } from './interface';

const tag = {
    namespaced: true,
    state: {
        tags: []
    },
    mutations: {
        [SET_TAG](state: TagState, payload: { data: Array<Tag> }) {
            state.tags = payload.data;
        }
    },
    actions: {
        async getAllTags({ commit }, data: GetAllTagsParams) {
            const res = await getAllTags(data);

            commit({
                type: SET_TAG,
                data: res.data.tags || []
            })
        }
    }
};

export default tag;