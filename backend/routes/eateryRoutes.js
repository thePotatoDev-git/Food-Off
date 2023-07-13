import express from 'express';
const router = express.Router();
import {
    getEateryLists,
    addEatery,
    deleteEatery,
} from '../controllers/eateryController.js';

router.get('/lists', getEateryLists);
router.post('/', addEatery);
router.delete('/', deleteEatery);

export default router;