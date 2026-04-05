export function signupUserDto(user)
{
    return {
        message: "User signed up successfully",
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

export function loginUserDto(user, token)
{
    return {
        message: "User logged in successfully",
        data: {
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                active: user.active
            },
            token
        }
    };
}