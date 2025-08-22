
export type WordsListResponseData = Word[];
export interface WordsListRequestParams {
    ayah_uuid?: string;
    limit?: number;
    offset?: number;
    ordering?: string;
    search?: string;
}
export interface WordsCreateRequestData {
    ayah_uuid: string;
    text: string;
}
export interface WordsCreateResponseData {
    text: string;
    uuid: string;
}
export interface WordsCreateRequestParams {
    ayah_uuid?: string;
}
export interface WordsRetrieveResponseData {
    text: string;
    uuid: string;
}
export interface WordsUpdateRequestData {
    ayah_uuid: string;
    text: string;
}
export interface WordsUpdateResponseData {
    text: string;
    uuid: string;
}
export interface WordsPartialupdateRequestData {
    ayah_uuid?: string;
    text?: string;
}
export interface WordsPartialupdateResponseData {
    text: string;
    uuid: string;
}


export interface Word {
    uuid: string;
    text: string;
    ayah_uuid: string;
}