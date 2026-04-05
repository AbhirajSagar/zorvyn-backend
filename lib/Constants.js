const STATUS_CODES = 
{
    BAD_REQUEST: 400,
    SUCCESS: 200,
    CREATED: 201,
    INTERNAL_SERVER_ERROR: 500,
    FORBIDDEN: 403,
    UNAUTHENTICATED: 401,
    NOT_FOUND: 404
};

const USER_ROLES = 
{
    VIEWER: 'viewer',
    ANALYST: 'analyst',
    ADMIN: 'admin',
    VALID_ROLES: ['viewer', 'analyst', 'admin']
};

const RECORD_TYPES =
{
    INCOME: 'income',
    EXPENSE: 'expense',
    VALID_TYPES: ['income', 'expense']
};

export { STATUS_CODES, USER_ROLES, RECORD_TYPES };