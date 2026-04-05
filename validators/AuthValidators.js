import Joi from 'joi'

const signupSchema = Joi.object
({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})
.required()
.label(`signup request body`);

const loginSchema = Joi.object
({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})
.required()
.label(`login request body`);

const validatorSchemas = {signupSchema, loginSchema};
export default validatorSchemas;