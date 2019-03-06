import request from './axios';

type getArt = {
    id: string
};

export async function getArticle(params: getArt) {
    const res = await request.get(`/article/${params.id}`);
    return res.data;
}