import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Email already registered' });

    const user = await User.create({ email, password, role });
    const token = generateToken(user._id, user.role); // pass role to token

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Signup failed' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user._id, user.role); // pass role to token
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

export const profile = async (req, res) => {
  res.json({ message: `Welcome user ${req.user.id}` });
};
