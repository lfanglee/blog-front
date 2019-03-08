import request from '../utils/axios';
import { AxiosResponse } from 'axios';
import { GetArticleParams } from './interface';

export async function getArticle(params: GetArticleParams): Promise<Ajax.AjaxResponse> {
    const res: AxiosResponse = await request.get(`/article/${params.id}`);
    return res.data;
}