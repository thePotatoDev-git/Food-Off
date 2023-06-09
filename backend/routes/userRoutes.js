import express from 'express';
const router = express.Router();
import { 
    authUser,
    registerUser,
    logoutUser,
    getMainPage,
    getUserProfile,
    updateUserProfile, 
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/main').get(protect, getMainPage).put(protect, getMainPage);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;