import express from 'express';
const router = express.Router();
import {
    getEateryLists,
    addEatery,
    deleteEatery,
} from '../controllers/eateryController.js';
import { protect } from '../middleware/authMiddleware.js';

// Routes for controller methods
router.route('/lists').get(protect, getEateryLists);
router.post('/', addEatery);
router.delete('/', deleteEatery);

export default router;