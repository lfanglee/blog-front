export interface ArticleState {
    detail: ArticleDetail,
    articleList: Array<ArticleListItem>,
    pagination: pagination,
    allArticles: Array<ArticleMapListYearListItem>
}

export interface ArticleDetail extends ArticleListItem {
    content: string,
}

export interface ArticleListItem {
    readonly _id: string,
    title: string,
    thumb: string,
    description: string,
    create_at: string
    [key: string]: any
}

export interface pagination {
    total: number,
    pageNo: number,
    totalPage: number,
    pageSize: number
}

interface ArticleMapListItem {
    readonly _id: string,
    title: string,
    create_at: string
}

interface ArticleMapListMonthListItem {
    month: number,
    articleList: Array<ArticleMapListItem>
}

export interface ArticleMapListYearListItem {
    year: number,
    monthList: Array<ArticleMapListMonthListItem>
}
