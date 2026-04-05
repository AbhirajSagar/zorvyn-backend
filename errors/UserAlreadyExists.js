import { STATUS_CODES } from "../lib/Constants.js";

export class UserAlreadyExists extends Error
{
    constructor(email)
    {
        super(`User with ${email} already exists.`);
        this.status = STATUS_CODES.BAD_REQUEST;
    }
}