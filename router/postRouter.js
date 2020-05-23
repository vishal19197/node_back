const express = require('express');
const router = express.Router();
const postControler = require('../controler/postControler');

router.get('/get-post',postControler.getAllPostControler);

router.post('/save-post',postControler.savePostControler);

router.get('/get-one',postControler.getOnePostControler);

router.put('/update-one',postControler.updatePostControler);

router.delete('/delete',postControler.deletePostControler);

module.exports = router;