import { STATUS_CODES } from '../lib/Constants.js';

export default function validate(schema)
{
    return (req, res, next) =>
    {
        const { error } = schema.validate(req.body)

        if(error)
        {
            const message = error.details[0].message
            return res.status(STATUS_CODES.BAD_REQUEST).json({message});
        }

        next()
    }
}