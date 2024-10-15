const db = require('../config/db');

// 创建新用户
exports.createUser = (username, password, role) => {
  const query = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  return db.execute(query, [username, password, role]);
};

// 通过用户名查找用户
exports.findUserByUsername = (username) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  return db.execute(query, [username]).then(([rows]) => rows[0]);  // 返回第一个用户
};
