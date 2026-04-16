
//यह define करता है कौन सा URL किस function को call करेगा
const router = require('express').Router();
const { register, login } = require('../controllers/authControllers');

router.post('/register', register);
router.post('/login', login);

module.exports = router;