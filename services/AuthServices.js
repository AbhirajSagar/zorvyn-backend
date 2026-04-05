import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import { UserAlreadyExists } from "../errors/UserAlreadyExists.js";
import { UserNotExists } from "../errors/UserNotExists.js";
import { InvalidCredentials } from '../errors/InvalidCredentials.js';
import { findUserByEmail, createUser } from "../repositories/UserRepo.js";
import { MissingEnvVar } from '../errors/MissingEnvVar.js';

async function signupUser(name, email, password)
{
    const alreadyExistingUser = await findUserByEmail(email);
    if(alreadyExistingUser) throw new UserAlreadyExists(email);

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS) || 10);
    const createdUser = await createUser(name, email, hashedPassword);
    return createdUser;
}

async function loginUser(email, password)
{
    const user = await findUserByEmail(email);
    if(!user) throw new UserNotExists(`email as ${email}`);

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new InvalidCredentials();

    const payload = { id: user.id, role: user.role, email: user.email };
    const options = { expiresIn: process.env.JWT_EXPIRES_IN || '1d'};
    const secret = process.env.JWT_SECRET_KEY;

    if(!secret) throw new MissingEnvVar('JWT_SECRET_KEY');

    const token = jwt.sign(payload, secret, options);
    return { user, token };
}

const authServices = { signupUser, loginUser };
export default authServices;