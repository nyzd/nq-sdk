
export type GroupsListResponseData = Group[];
export interface GroupsCreateRequestData {
    name: string;
}
export interface GroupsCreateResponseData {
    name: string;
    url: string;
}
export interface GroupsRetrieveResponseData {
    name: string;
    url: string;
}
export interface GroupsUpdateRequestData {
    name: string;
}
export interface GroupsUpdateResponseData {
    name: string;
    url: string;
}
export interface GroupsPartialupdateRequestData {
    name?: string;
}
export interface GroupsPartialupdateResponseData {
    name: string;
    url: string;
}


export interface Group {
    uuid: string;
    name: string;
    url?: string;
}