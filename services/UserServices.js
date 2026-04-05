import { findUserById, findUserByEmail, createUserWithRole, updateUserRoleById, updateUserStatusById, findAllUsers } from "../repositories/UserRepo.js";
import { UserAlreadyExists } from "../errors/UserAlreadyExists.js";
import { UserNotExists } from '../errors/UserNotExists.js';
import bcrypt from 'bcrypt';

async function createUser(name, email, password, role)
{
    const alreadyExistingUser = await findUserByEmail(email);
    if(alreadyExistingUser) throw new UserAlreadyExists(email);
    
    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS) || 10);
    const createdUser = await createUserWithRole(name, email, hashedPassword, role);
    return createdUser;
}

async function updateUserRole(id, role)
{
    const user = await findUserById(id);
    if(!user) throw new UserNotExists(`id as ${id}`);

    const updatedUser = await updateUserRoleById(id, role);
    return updatedUser;
}

async function updateUserStatus(id, active)
{
    const user = await findUserById(id);
    if(!user) throw new UserNotExists(`id as ${id}`);

    const updatedUser = await updateUserStatusById(id, active);
    return updatedUser;
}

async function getAllUsers()
{
    const users = await findAllUsers();
    return users;
}

async function deleteUser(id)
{
    const user = await findUserById(id);
    if(!user) throw new UserNotExists(`id as ${id}`);

    const deletedUser = await user.deleteOne();
    return deletedUser;
}

const userServices = { createUser, updateUserRole, updateUserStatus, getAllUsers, deleteUser };
export default userServices;