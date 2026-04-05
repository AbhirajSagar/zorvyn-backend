import { UnauthenticatedUser } from "../errors/UnauthenticatedUser.js";
import { UnauthorizedUser } from "../errors/UnauthorizedUser.js";

export default function RoleValidator(allowedRoles = [])
{
    return (req, res, next) =>
    {
        try
        {
            if(!req.user) throw new UnauthenticatedUser();
            if(!allowedRoles.includes(req.user.role)) 
                throw new UnauthorizedUser(req.user.role, allowedRoles);

            next();
        }
        catch(err)
        {
            next(err);
        }
    }
}