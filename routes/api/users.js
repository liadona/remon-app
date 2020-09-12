const express=require('express');
const router=express.Router();

// @route post api/users
// @descTest route
// @accessPublic

router.post('/', (req, res) =>res.send('User route'));


module.exports = router;
