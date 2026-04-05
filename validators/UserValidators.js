import Joi from 'joi';
import { USER_ROLES } from '../lib/Constants.js';

const createUserSchema = Joi.object
({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid(...USER_ROLES.VALID_ROLES).required()
})
.required()
.label(`create user request body`);

const updateUserRoleSchema = Joi.object
({
    role: Joi.string().valid(...USER_ROLES.VALID_ROLES).required()
})
.required()
.label(`update user role request body`);

const updateUserStatusSchema = Joi.object
({
    active: Joi.boolean().required()
})
.required()
.label(`update user status request body`);

const validatorSchemas = {createUserSchema, updateUserRoleSchema, updateUserStatusSchema};
export default validatorSchemas;