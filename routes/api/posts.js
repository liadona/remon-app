const express=require('express');
const router=express.Router();

// @routeGET api/posts
// @descTest route
// @accessPublic atau Private

router.get('/', (req, res) =>res.send('Posts route'));


module.exports = router;