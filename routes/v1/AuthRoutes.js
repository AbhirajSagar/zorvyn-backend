import express from 'express'
import authControllers from '../../controllers/AuthController.js';
import authValidators from '../../validators/AuthValidators.js';
import validate from '../../middlewares/Validator.js';
import catchAsync from '../../lib/CatchAsync.js';

const router = express.Router();

router.post
(
    '/login', 
    validate(authValidators.loginSchema),
    catchAsync(authControllers.loginUser)
);

router.post
(
    '/signup',
    validate(authValidators.signupSchema),
    catchAsync(authControllers.signupUser)
);

export default router;