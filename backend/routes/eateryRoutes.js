import express from 'express';
const router = express.Router();
import {
    getEateryLists,
    getEateryById,
    addEatery,
    deleteEatery,
} from '../controllers/eateryController.js';
import { protect } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

// Routes for controller methods
router.route('/eateries').get(protect, getEateryLists);
router
    .route('/eateries/:id')
    .get(protect, checkObjectId, getEateryById);
router.post('/', addEatery);
router.delete('/', deleteEatery);

export default router;