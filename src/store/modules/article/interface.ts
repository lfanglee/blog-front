export interface ArticleState {
    detail: ArticleDetail,
    articleList: Array<ArticleListItem>,
    pagegation: Pagegation
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
