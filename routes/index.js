var express = require('express');
var router = express.Router();
let controller = require('./api/controller');


/* GET home page. */
router.get('/get', controller.useGet);
router.post('/post', controller.usePost);
router.put('/put', controller.usePut);
router.delete('/delete', controller.useDelete);
router.patch('/patch', controller.usePatch);


module.exports = router;
