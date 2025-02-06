export type SeasonEpisode = {
    "id": number;
    "name": string;
    "number": number;
    "productionCode": string;
}

export type SeasonDetail = {
    "id": number;
    "episodes": SeasonEpisode[];
}

export type SeasonsList = {
    "items": SeasonDetail[];
    "total": number;
    "page": number;
    "size": number;
    "pages": number;
}
