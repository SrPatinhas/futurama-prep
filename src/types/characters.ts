export type CharacterDetail = {
    "id": number;
    "name": string;
    "gender": string;
    "status": string;
    "species": string;
    "createdAt": string;
    "image": string;

}

export type CharacterList = {
    "items": CharacterDetail[];
    "total": number;
    "page": number;
    "size": number;
    "pages": number;
}
