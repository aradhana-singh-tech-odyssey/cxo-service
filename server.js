import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
import { usedFn } from './utils.js';
usedFn();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Allow frontend origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
