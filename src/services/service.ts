import request from '../utils/axios';
import { AxiosResponse } from 'axios';
import { GetArticleParams, GetArticleListParams, GetAllArticlesParams, GetAllTagsParams } from './interface';
import { async } from 'q';

export async function getArticle(params: GetArticleParams): Promise<Ajax.AjaxResponse> {
    const res: AxiosResponse = await request.get(`/article/${params.id}`);
    return res.data;
}

export async function getArticleList(params: GetArticleListParams): Promise<Ajax.AjaxResponse> {
    const res: AxiosResponse = await request.get('/articleList', { params });
    return res.data;
}

export async function getAllTags(params: GetAllTagsParams): Promise<Ajax.AjaxResponse> {
    const res: AxiosResponse = await request.get('/allTags', { params });
    return res.data;
}

export async function getAllArticles(params: GetAllArticlesParams): Promise<Ajax.AjaxResponse> {
    const res: AxiosResponse = await request.get('/allArticles', { params });
    return res.data;
}