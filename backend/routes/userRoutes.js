const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { adminOnly, userOnly } = require('../middlewares/authMiddleware');

// 注册用户
router.post('/register', userController.registerUser);

// 用户登录
router.post('/login', userController.loginUser);

// 只有管理员能访问的路由
router.get('/admin', adminOnly, (req, res) => {
  res.send('Admin content');
});

// 只有普通用户能访问的路由
router.get('/profile', userOnly, (req, res) => {
  res.send('User profile');
});

module.exports = router;
