import { createUserDto, updateUserRoleDto, updateUserStatusDto, deleteUserDto, getAllUsersDto } from "../dto/UserDto.js";
import userServices from "../services/UserServices.js";
import { STATUS_CODES } from '../lib/Constants.js';

async function createUser(req, res)
{
    const { name, email, password, role } = req.body;
    const user = await userServices.createUser(name, email, password, role);
    const response = createUserDto(user);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function updateUserRole(req, res)
{
    const { id } = req.params;
    const { role } = req.body;
    const user = await userServices.updateUserRole(id, role);
    const response = updateUserRoleDto(user);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function updateUserStatus(req, res)
{
    const { id } = req.params;
    const { active } = req.body;
    const user = await userServices.updateUserStatus(id, active);
    const response = updateUserStatusDto(user);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function deleteUser(req, res)
{
    const { id } = req.params;
    const deletedUser = await userServices.deleteUser(id);
    const response = deleteUserDto(deletedUser);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function getAllUsers(_, res)
{
    const users = await userServices.getAllUsers();
    const response = getAllUsersDto(users);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

const controllers = { createUser, updateUserRole, updateUserStatus, deleteUser, getAllUsers };
export default controllers;