import { STATUS_CODES } from "../lib/Constants.js";

export class UnauthorizedUser extends Error
{
    constructor(role, allowedRoles)
    {
        super(`${role} role is not sufficient for this action, only ${allowedRoles.join(',')} can perform this task`);
        this.status = STATUS_CODES.FORBIDDEN;
    }
}