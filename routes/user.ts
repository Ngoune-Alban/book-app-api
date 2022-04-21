import express from 'express';
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/login', userCtrl.login);
router.post('/register', userCtrl.register);

module.exports = router;