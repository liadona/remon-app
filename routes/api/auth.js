const express=require('express');
const router=express.Router();

// @routeGET api/auth
// @descTest route
// @accessPublic atau Private

router.get('/', (req, res) =>res.send('Auth route'));


module.exports = router;