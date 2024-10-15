const mysql = require('mysql2');
require('dotenv').config(); // 加载 .env 文件中的环境变量

// 创建数据库连接池
const pool = mysql.createPool({
  host: process.env.DB_HOST,     // MySQL 主机名
  user: process.env.DB_USER,     // MySQL 用户名
  password: process.env.DB_PASSWORD, // MySQL 密码
  database: process.env.DB_NAME, // 数据库名
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 导出连接池
module.exports = pool.promise();
