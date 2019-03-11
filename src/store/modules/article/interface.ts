export interface ArticleState {
    detail: ArticleDetail,
    articleList: Array<ArticleListItem>,
    pagegation: Pagegation,
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
    createAt: string
    [key: string]: any
}

export interface Pagegation {
    total: number,
    pageNo: number,
    totalPage: number,
    pageSize: number
}

interface ArticleMapListItem {
    readonly _id: string,
    title: string,
    createAt: string
}

interface ArticleMapListMonthListItem {
    month: number,
    articleList: Array<ArticleMapListItem>
}

export interface ArticleMapListYearListItem {
    year: number,
    monthList: Array<ArticleMapListMonthListItem>
}
