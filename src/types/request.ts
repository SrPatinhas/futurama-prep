export type RequestError = {
    "detail": string | RequestValidationError[];
}

export type RequestValidationError = {
    "loc": Array<string | number>;
    "msg": string;
    "type": string;
}
