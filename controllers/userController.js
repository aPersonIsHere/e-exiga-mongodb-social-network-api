const { User } = require('../models/index');

module.exports = {
    async getUsers (req, res) {
        try {
            console.log("+++++++++++++++++");
            console.log('GETTING USERS');;
            const users = await User.find();
            res.json(users);
        } catch (error) {
            console.log("+++++++++++++++++");
            console.log('GETTING USERS ERROR');
            console.log(error);
        }
    },
    async getSingleUser (req, res) {
        try {
            console.log("+++++++++++++++++");
            console.log('GETTING USER');
            const user = await User.findOne({ _id: req.params.userId });
            
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json({
                user
            });
        } catch (error) {
            console.log("+++++++++++++++++");
            console.log('GETTING USER ERROR');
            console.log(error);
        }
    },
    async createUser (req, res) {
        try {
            console.log("+++++++++++++++++");
            console.log('CREATING USER');
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (error) {
            console.log("+++++++++++++++++");
            console.log('CREATING USER ERROR');
            console.log(error);
        }
    },

}