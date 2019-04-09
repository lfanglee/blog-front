import request from '../utils/axios';
import { AxiosResponse, AxiosError } from 'axios';
import router from '@/router/index';
import { GetArticleParams, GetArticleListParams, GetAllArticlesParams, GetAllTagsParams } from './interface';

const redirectToErrorPage = (status: number) => {
    router.push(`error-${status}`);
};
const getErrorResponse = (status: number) => ({
    code: status,
    message: `请求出现了${status}错误`,
    data: null
});

export async function getArticle(params: GetArticleParams): Promise<Ajax.AjaxResponse> {
    try {
        const res: AxiosResponse = await request.get(`/article/${params.id}`);
        return res.data;
    } catch (error) {
        error.response.status === 404 ? redirectToErrorPage(404) : redirectToErrorPage(500);
        return getErrorResponse(error.response.status);
    }
}

export async function getArticleList(params: GetArticleListParams): Promise<Ajax.AjaxResponse> {
    try {
        const res: AxiosResponse = await request.get('/articleList', { params });
        return res.data;
    } catch (error) {
        error.response.status === 404 ? redirectToErrorPage(404) : redirectToErrorPage(500);
    }
}

export async function getAllTags(params: GetAllTagsParams): Promise<Ajax.AjaxResponse> {
    try {
        const res: AxiosResponse = await request.get('/allTags', { params });
        return res.data;
    } catch (error) {
        error.response.status === 404 ? redirectToErrorPage(404) : redirectToErrorPage(500);
    }
}

export async function getAllArticles(params: GetAllArticlesParams): Promise<Ajax.AjaxResponse> {
    try {
        const res: AxiosResponse = await request.get('/allArticles', { params });
        return res.data;
    } catch (error) {
        error.response.status === 404 ? redirectToErrorPage(404) : redirectToErrorPage(500);
    }
}