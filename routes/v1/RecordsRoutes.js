import express from 'express'
import recordControllers from '../../controllers/RecordController.js';
import recordValidators from '../../validators/RecordValidators.js';
import validate from '../../middlewares/Validator.js';
import authenticationMiddleware from '../../middlewares/Authenticator.js';
import roleValidatorMiddleware from '../../middlewares/RoleValidator.js';
import catchAsync from '../../lib/CatchAsync.js';
import { USER_ROLES } from '../../lib/Constants.js';

const router = express.Router();

router.post
(
    '/',
    validate(recordValidators.getRecordsSchema),
    authenticationMiddleware,
    catchAsync(recordControllers.getRecords)
);

router.post
(
    '/create',
    validate(recordValidators.createRecordSchema),
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN]),
    catchAsync(recordControllers.createRecord)
);

router.patch
(
    '/:id',
    validate(recordValidators.updateRecordSchema),
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN]),
    catchAsync(recordControllers.updateRecord)
);

router.delete
(
    '/:id',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN]),
    catchAsync(recordControllers.deleteRecord)
);

export default router;