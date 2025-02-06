export type EpisodeDetail = {
    "id": number;
    "name": string;
    "number": number;
    "productionCode": string;
    "airDate": string;
    "duration": number;
    "createdAt": string;
    "season": {
        "id": number;
    },
    "broadcastCode": string;
}

export type EpisodesList = {
    "items": EpisodeDetail[];
    "total": number;
    "page": number;
    "size": number;
    "pages": number;
}
