const express = require('express');
const connectDB = require('./config');
const imageRoutes = require('./routes/imageRoutes');
const userRoutes = require('./routes/userRoutes'); // 确保正确导入
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authenticateToken = require('./middleware/authenticateToken');

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/images/upload', authenticateToken, imageRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/users', userRoutes); // 确保正确使用路由

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
