import request from '../utils/axios';
import { AxiosResponse } from 'axios';
import { GetArticleParams, GetArticleListParams } from './interface';

export async function getArticle(params: GetArticleParams): Promise<Ajax.AjaxResponse> {
    const res: AxiosResponse = await request.get(`/article/${params.id}`);
    return res.data;
}

export async function getArticleList(params: GetArticleListParams): Promise<Ajax.AjaxResponse> {
    const res: AxiosResponse = await request.get('/articleList', { params });
    return res.data;
}