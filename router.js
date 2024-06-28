const express = require('express');
const router = express.Router();
const { getAllUsers } = require('./controller/conGet');
const { postContent } = require('./controller/conPost');
const { updateUser } = require('./controller/conPut');
const { deleteId } = require('./controller/conDelete');

router.get('/get', getAllUsers);
router.post('/post', postContent);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteId);
module.exports = router;
