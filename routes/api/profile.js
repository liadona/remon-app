const express=require('express');
const router=express.Router();

// @routeGET api/profile
// @descTest route
// @accessPublic atau Private

router.get('/', (req, res) =>res.send('Profile route'));


module.exports = router;