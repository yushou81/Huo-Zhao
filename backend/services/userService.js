// 模拟数据库用户列表
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// 获取所有用户
exports.getAllUsers = () => {
  return users;
};

// 创建新用户
exports.createUser = (user) => {
  users.push(user);
  return user;
};
