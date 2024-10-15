const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();  // 加载 .env 文件中的环境变量

const app = express();

// 连接数据库
connectDB()

// 中间件
app.use(express.json()); // 解析 JSON 数据
app.use(cors());

// 使用用户路由
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello from Render!');
});

