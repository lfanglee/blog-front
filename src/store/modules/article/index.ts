import {
    getArticle,
    getArticleList,
    getAllArticles
} from '@/services/service';
import { ArticleState, ArticleDetail, ArticleListItem, pagination, ArticleMapListYearListItem } from "./interface";
import { GetArticleParams, GetArticleListParams, GetAllArticlesParams } from '@/services/interface';
import {
    SET_ARTICLE_DETAIL,
    SET_ARTICLE_LIST,
    SET_ALL_ARTICLES
} from '../../mutation-types';

const article = {
    namespaced: true,
    state: {
        // 文章详情
        detail: {},
        articleList: [],
        pagination: {},

        allArticles: []  // 用于归档页面，带有年月日分层
    },
    mutations: {
        [SET_ARTICLE_DETAIL](state: ArticleState, payload: { data: ArticleDetail}) {
            state.detail = payload.data;
        },
        [SET_ARTICLE_LIST](state: ArticleState, payload: { list: Array<ArticleListItem>, pagination: pagination }) {
            state.articleList = payload.list;
            state.pagination = payload.pagination;
        },
        [SET_ALL_ARTICLES](state: ArticleState, payload: { data: Array<ArticleMapListYearListItem> }) {
            state.allArticles = payload.data;
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
            if (res && +res.code === 0) {
                commit({
                    type: SET_ARTICLE_LIST,
                    list: res.data.list || [],
                    pagination: res.data && res.data.pagination || {}
                });
            } else {
                commit({
                    type: SET_ARTICLE_LIST,
                    list: [],
                    pagination: {}
                });
            }
        },
        async getAllArticles({ commit }, data: GetAllArticlesParams) {
            const res = await getAllArticles(data);

            commit({
                type: SET_ALL_ARTICLES,
                data: res.data || []
            });
        }
    }
};

export default article;