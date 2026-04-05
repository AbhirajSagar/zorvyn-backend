import express from 'express'
import userControllers from '../../controllers/UserController.js'
import catchAsync from '../../lib/CatchAsync.js';
import authenticationMiddleware from '../../middlewares/Authenticator.js';
import roleValidatorMiddleware from '../../middlewares/RoleValidator.js';
import validate from '../../middlewares/Validator.js';
import userValidators from '../../validators/UserValidators.js';
import { USER_ROLES } from '../../lib/Constants.js';

const router = express.Router();

router.post
(
    '/create',
    validate(userValidators.createUserSchema),
    authenticationMiddleware, 
    roleValidatorMiddleware([USER_ROLES.ADMIN]), 
    catchAsync(userControllers.createUser)
);

router.get
(
    '/all',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN]),
    catchAsync(userControllers.getAllUsers)
);

router.patch
(
    '/:id/role',
    validate(userValidators.updateUserRoleSchema),
    authenticationMiddleware, 
    roleValidatorMiddleware([USER_ROLES.ADMIN]),
    catchAsync(userControllers.updateUserRole)
);

router.patch
(
    '/:id/status',
    validate(userValidators.updateUserStatusSchema),
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN]),
    catchAsync(userControllers.updateUserStatus)
);

router.delete
(
    '/delete/:id',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN]),
    catchAsync(userControllers.deleteUser)
)

export default router;