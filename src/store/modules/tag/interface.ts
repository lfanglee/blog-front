export interface Tag {
    readonly _id: string,
    name: string,
    count: number
}

export interface TagState {
    tags: Array<Tag>
}