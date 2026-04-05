import { STATUS_CODES } from "../lib/Constants.js";

export class RecordNotExists extends Error
{
    constructor(id)
    {
        super(`Record with ${id} does not exist.`);
        this.status = STATUS_CODES.NOT_FOUND;
    }
}