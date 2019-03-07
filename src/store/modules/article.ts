import {
    getArticle
} from '@/utils/service';

export interface ArticleDetail {
    title: string,
    content: string
}

export interface ArticleState {
    detail: ArticleDetail
}

interface SetArticleDetailPayload {
    data: ArticleDetail
}

interface getArticleParmas {
    id: string
}

const article = {
    namespaced: true,
    state: {
        // 文章详情
        detail: {}
    },
    mutations: {
        SET_ARTICLE_DETAIL(state: ArticleState, payload: SetArticleDetailPayload) {
            state.detail = payload.data;
        }
    },
    actions: {
        async getArticle({ commit }, data: getArticleParmas) {
            const res = await getArticle(data);
            commit({
                type: 'SET_ARTICLE_DETAIL',
                data: res.result || {}
            });
        }
    }
};

export default article;