const express = require('express');
const router = express.Router();

const adminCheck = require('../../middlewares/adminCheck');
const { getAvatar, getAllUsers, getUsersById, removeUsers, verifyUserName, verifyEmail } = require('../../API/controllers/usersController')

/* /api/users */
router
    .get('/avatar/:file', getAvatar)
    .get('/', getAllUsers)
    .get('/:id', getUsersById)
    .post('/verify-username', verifyUserName)
    .post('/verify-email', verifyEmail)
    .delete('/remove/:id', adminCheck, removeUsers)

module.exports = router;