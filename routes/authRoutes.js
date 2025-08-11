import express from 'express';
import { signup, login, profile } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authMiddleware, roleMiddleware(['user', 'admin']), profile);

// Protected route for admins only
router.get('/admin', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Welcome Admin!' });
});

// Protected route for user or admin
router.get('/dashboard', authMiddleware, roleMiddleware(['user', 'admin']), (req, res) => {
  res.json({ message: `Dashboard for ${req.user.role}` });
});

export default router;
