const { 
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

const router = require('express').Router();

router.route('/').get(getUsers);
router.route('/:userId').get(getSingleUser);
router.route('/').post(createUser);
router.route('/').get(getSingleUser).put();

module.exports = router;
