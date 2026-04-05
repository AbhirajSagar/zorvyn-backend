import Joi from 'joi'
import { RECORD_TYPES } from '../lib/Constants.js';

const getRecordsSchema = Joi.object
({
    id: Joi.string(),
    category: Joi.string(),
    type: Joi.string().valid(...RECORD_TYPES.VALID_TYPES),
    date: Joi.date()
})
.label(`get records body`);

const createRecordSchema = Joi.object
({
    amount: Joi.number().required(),
    type: Joi.string().valid(...RECORD_TYPES.VALID_TYPES).required(),
    category: Joi.string().required(),
    description: Joi.string().default('').required()
})
.required()
.label(`create records body`);

const updateRecordSchema = Joi.object
({
    amount: Joi.number(),
    type: Joi.string().valid(...RECORD_TYPES.VALID_TYPES),
    category: Joi.string(),
    description: Joi.string()
})
.required()
.label(`update records body`);

const validatorSchemas = {getRecordsSchema, createRecordSchema, updateRecordSchema};
export default validatorSchemas;