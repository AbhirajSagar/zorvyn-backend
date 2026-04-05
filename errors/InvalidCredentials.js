import { STATUS_CODES } from "../lib/Constants.js";

export class InvalidCredentials extends Error
{
    constructor()
    {
        super(`Invalid credentials`);
        this.status = STATUS_CODES.UNAUTHENTICATED;
    }
}