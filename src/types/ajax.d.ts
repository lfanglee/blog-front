declare namespace Ajax {
    export interface AxiosResponse {
        data: AjaxResponse
    }

    export interface AjaxResponse<T = any> {
        code: number,
        data: T,
        message: string
    }
}