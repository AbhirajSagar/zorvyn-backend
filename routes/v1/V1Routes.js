import express from 'express'

import UserRoutes from './UserRoutes.js';
import AuthRoutes from './AuthRoutes.js';
import RecordRoutes from './RecordsRoutes.js';
import DashboardRoutes from './DashboardRoutes.js';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/users', UserRoutes);
router.use('/records', RecordRoutes);
router.use('/dashboard', DashboardRoutes);

export default router;