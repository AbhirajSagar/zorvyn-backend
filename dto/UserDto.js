export function createUserDto(user)
{
    return {
        message: "User created successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                active: user.active,
                createdAt: user.createdAt
            }
        }
    };
}

export function updateUserRoleDto(user)
{
    return {
        message: "User role updated successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                active: user.active,
                updatedAt: user.updatedAt
            }
        }
    };
}

export function updateUserStatusDto(user)
{
    return {
        message: "User status updated successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                active: user.active,
                updatedAt: user.updatedAt
            }
        }
    };
}

export function deleteUserDto(deletedUserData)
{
    return {
        message: "User deleted successfully",
        data: { deletedUserData }
    }
}

export function getAllUsersDto(users)
{
    return {
        message: "Users fetched successfully",
        data: {
            users
        }
    }
}