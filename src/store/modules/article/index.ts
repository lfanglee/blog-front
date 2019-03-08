import {
    getArticle,
    getArticleList
} from '@/services/service';
import { ArticleState, ArticleDetail, ArticleListItem, Pagegation } from "./interface";
import { GetArticleParams, GetArticleListParams } from '@/services/interface';
import {
    SET_ARTICLE_DETAIL,
    SET_ARTICLE_LIST
} from '../../mutation-types';

const article = {
    namespaced: true,
    state: {
        // 文章详情
        detail: {},
        articleList: [],
        pagegation: {},
    },
    mutations: {
        [SET_ARTICLE_DETAIL](state: ArticleState, payload: { data: ArticleDetail}) {
            state.detail = payload.data;
        },
        [SET_ARTICLE_LIST](state: ArticleState, payload: { list: Array<ArticleListItem>, pagegation: Pagegation }) {
            state.articleList = payload.list;
            state.pagegation = payload.pagegation;
        }
    },
    actions: {
        async getArticle({ commit }, data: GetArticleParams) {
            const res = await getArticle(data);
            commit({
                type: SET_ARTICLE_DETAIL,
                data: res.data || {}
            });
        },
        async getArticleList({ commit }, data: GetArticleListParams) {
            const res = await getArticleList(data);

            commit({
                type: SET_ARTICLE_LIST,
                list: res.data && res.data.list || [],
                pagegation: res.data && res.data.pagegation || {}
            });
        }
    }
};

export default article;