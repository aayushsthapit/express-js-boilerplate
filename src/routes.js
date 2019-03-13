var express = require('express')
var router = express.Router();

import authController from './controllers/auth'
router.route('/test').get((req, res) => {
    var response = { a: 'ssssd' }
    res.json(response)

})

router.use('/auth',authController);



export default router;
