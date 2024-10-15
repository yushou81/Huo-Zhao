const jwt = require('jsonwebtoken');

// 检查管理员权限
exports.adminOnly = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Admins only' });
  }

  next();
};

// 检查普通用户权限
exports.userOnly = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (decoded.role !== 'user') {
    return res.status(403).json({ error: 'Access denied. Users only' });
  }

  next();
};
