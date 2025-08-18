import express from 'express';
import { signup, login, refreshToken, profile } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.get('/profile', authMiddleware, roleMiddleware(['nurse', 'doctor', 'admin']), profile);

// Protected route for admins only
router.get('/admin', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

// Protected route for user or admin
router.get('/dashboard', authMiddleware, roleMiddleware(['nurse', 'admin', 'doctor']), (req, res) => {
  res.json({ message: `Dashboard for ${req.user.role}` });
});

export default router;
