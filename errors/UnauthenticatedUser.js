import { STATUS_CODES } from "../lib/Constants.js";

export class UnauthenticatedUser extends Error
{
    constructor()
    {
        super(`Unauthenticated user`);
        this.status = STATUS_CODES.UNAUTHENTICATED;
    }
}