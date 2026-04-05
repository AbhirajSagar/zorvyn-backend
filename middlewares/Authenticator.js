import jwt from 'jsonwebtoken';
import { UnauthenticatedUser } from "../errors/UnauthenticatedUser.js";
import { MissingEnvVar } from '../errors/MissingEnvVar.js';

export default function Authenticator(req, res, next)
{
    try
    {
        const authHeader = req.headers.authorization;
        if(!authHeader) throw new UnauthenticatedUser();

        const token = authHeader.split(' ')[1];
        if(!token) throw new UnauthenticatedUser();

        const secret = process.env.JWT_SECRET_KEY;
        if(!secret) throw new MissingEnvVar('JWT_SECRET_KEY');

        const user = jwt.verify(token, secret);

        req.user = user;
        next();
    }
    catch(err)
    {
        next(err);
    }
}