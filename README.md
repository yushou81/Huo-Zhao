# Huo-Zhao
大创火照网站

## 使用说明：

```bash
npm run dev //启动项目
npm install axios //安装axios
npm install express mysql cors //安装后端
```

**Express**：Node.js 的后端框架。

**MySQL**：Node.js 的 MySQL 客户端库。

**CORS**：解决跨域问题。

### 教学：

#### 前端开发：

使用axios库来调用后端API

```javascript
import axios from 'axios';

axios.get('http://localhost:3000/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

#### 后端开发：

创建一个简单的Express服务器

```javascript
// backend/index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());

// 设置数据库连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// 创建API路由
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM your_table';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```



### 部署问题：

Backend已经部署在render的免费服务器，但是没有部署数据库MYSQL。

