import User from '../models/User.js';

export async function findUserByEmail(email)
{
    return await User.findOne({email});
}

export async function findUserById(id)
{
    return await User.findById(id);
}

export async function createUser(name, email, password)
{
    return await User.create({name, email, password});
}

export async function createUserWithRole(name, email, password, role)
{
    return await User.create({name, email, password, role});
}

export async function updateUserRoleById(id, role)
{
    return await User.findByIdAndUpdate(id, {role}, {returnDocument: 'after'});
}

export async function updateUserStatusById(id, active)
{
    return await User.findByIdAndUpdate(id, {active}, {returnDocument: 'after'});
}

export async function findAllUsers()
{
    return await User.find({}, {password: 0});
}