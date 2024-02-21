const { register, login } = require('../controllers/user.controllers')

const router = require('express').Router()

router.post("/register", register)
router.get("/login", login)

module.exports = router