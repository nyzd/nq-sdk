
export interface PhrasesModifyRequestData {
    phrases: object;
}
export interface PhrasesModifyResponseData {
    phrases: object;
}
export interface PhrasesModifyRequestParams {
    language: string;
}
export type PhrasesListResponseData = Phrase[];
export interface PhrasesCreateRequestData {
    phrase: string;
}
export interface PhrasesCreateResponseData {
    phrase: string;
    uuid: string;
}
export interface PhrasesRetrieveResponseData {
    phrase: string;
    uuid: string;
}
export interface PhrasesUpdateRequestData {
    phrase: string;
}
export interface PhrasesUpdateResponseData {
    phrase: string;
    uuid: string;
}
export interface PhrasesPartialupdateRequestData {
    phrase?: string;
}
export interface PhrasesPartialupdateResponseData {
    phrase: string;
    uuid: string;
}


export interface Phrase {
    uuid: string;
    phrase: string;
}