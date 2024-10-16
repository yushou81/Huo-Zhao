// backend/index.js
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());



// 创建API路由
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM user';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
});
// API 路由
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  res.json(users); // 返回 JSON 数据
});
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  res.status(201).send('User added successfully');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
