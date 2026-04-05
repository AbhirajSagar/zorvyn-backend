import { STATUS_CODES } from "../lib/Constants.js";

export class MissingEnvVar extends Error
{
    constructor(variable)
    {
        super(`Missing env variable ${variable}`);
        this.status = STATUS_CODES.INTERNAL_SERVER_ERROR;
    }
}