import authServices from '../services/AuthServices.js';
import { loginUserDto, signupUserDto } from '../dto/AuthDto.js';
import { STATUS_CODES } from '../lib/Constants.js';

async function loginUser(req, res)
{
    const {email, password} = req.body;
    const {user, token} = await authServices.loginUser(email, password);
    const response = loginUserDto(user, token);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function signupUser(req, res)
{
    const {name, email, password} = req.body;
    const user = await authServices.signupUser(name, email, password);
    const response = signupUserDto(user);
    res.status(STATUS_CODES.CREATED).json(response);
}

const controllers = { loginUser, signupUser };
export default controllers;