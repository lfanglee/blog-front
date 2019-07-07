export interface Tag {
    readonly id: string,
    name: string,
    count: number
}

export interface TagState {
    tags: Array<Tag>
}