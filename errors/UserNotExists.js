import { STATUS_CODES } from "../lib/Constants.js";

export class UserNotExists extends Error
{
    constructor(property)
    {
        super(`User with ${property} does not exist.`);
        this.status = STATUS_CODES.NOT_FOUND;
    }
}