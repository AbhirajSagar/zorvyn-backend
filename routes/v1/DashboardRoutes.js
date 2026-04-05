import express from 'express'
import authenticationMiddleware from '../../middlewares/Authenticator.js';
import roleValidatorMiddleware from '../../middlewares/RoleValidator.js';
import { USER_ROLES } from '../../lib/Constants.js';
import catchAsync from '../../lib/CatchAsync.js';
import dashboardControllers from '../../controllers/DashboardController.js';

const router = express.Router();

router.get
(
    '/summary',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN, USER_ROLES.ANALYST]),
    catchAsync(dashboardControllers.getSummary)
)

router.get
(
    '/category',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN, USER_ROLES.ANALYST]),
    catchAsync(dashboardControllers.categoryWiseSummary)
)

router.get
(
    '/category/:category',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN, USER_ROLES.ANALYST]),
    catchAsync(dashboardControllers.categorySummary)
)

router.get
(
    '/recent',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN, USER_ROLES.ANALYST]),
    catchAsync(dashboardControllers.getRecentRecords)
)

router.get
(
    '/trends/weekly',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN, USER_ROLES.ANALYST]),
    catchAsync(dashboardControllers.getWeeklyTrends)
)

router.get
(
    '/trends/monthly',
    authenticationMiddleware,
    roleValidatorMiddleware([USER_ROLES.ADMIN, USER_ROLES.ANALYST]),
    catchAsync(dashboardControllers.getMonthlyTrends)
)

export default router;