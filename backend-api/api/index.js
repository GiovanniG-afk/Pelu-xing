import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productoRoutes from '../src/routes/productoRoutes.js';
import authRoutes from '../src/routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Pelu-xing en Vercel', status: 'ok' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.use('/api/productos', productoRoutes);
app.use('/api/auth', authRoutes);

export default app;
