import {
    getArticle
} from '@/services/service';
import { ArticleState, ArticleDetail } from "./interface";
import { GetArticleParams } from '@/services/interface';
import { SET_ARTICLE_DETAIL } from '../../mutation-types';

const article = {
    namespaced: true,
    state: {
        // 文章详情
        detail: {}
    },
    mutations: {
        [SET_ARTICLE_DETAIL](state: ArticleState, payload: { data: ArticleDetail}) {
            state.detail = payload.data;
        }
    },
    actions: {
        async getArticle({ commit }, data: GetArticleParams) {
            const res = await getArticle(data);
            commit({
                type: SET_ARTICLE_DETAIL,
                data: res.data || {}
            });
        }
    }
};

export default article;