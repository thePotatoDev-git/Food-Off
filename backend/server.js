import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './backend/config/.env' });
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/database.js';
const port = process.env.PORT || 9000;
import userRoutes from './routes/userRoutes.js';
import eateryRoutes from './routes/eateryRoutes.js';

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/eateries', eateryRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}.`));