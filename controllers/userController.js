const { User, Thought } = require('../models/index');

module.exports = {
    async getUsers (req, res) {
        try {
            console.log('GETTING USERS');
            const users = await User.find()
                .select('-__v');
            res.json(users);
        } catch (error) {
            console.log('GETTING USERS ERROR');
            console.log(error);
            return res.status(500).json(err);
        }
    },
    async getSingleUser (req, res) {
        try {
            console.log('GETTING USER');
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v') //This removes __v from showing up
                .populate('thoughts')
                .populate('friends');
            
            if (!user) {
                console.log('GETTING USER NON-EXISTENT');
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (error) {
            console.log('GETTING USER ERROR');
            console.log(error);
            return res.status(500).json(err);
        }
    },
    async createUser (req, res) {
        try {
            console.log('CREATING USER');
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (error) {
            console.log('CREATING USER ERROR');
            console.log(error);
            return res.status(500).json(err);
        }
    },
    async updateUser (req, res) {
        try {
            console.log('UPDATING USER');
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
                //runValidators will make Mongoose check for compliance with schema
                //new makes application return the modified version (Default will be original)
            )
                .select('-__v');;

            if (!user) {
                console.log('UPDATING USER NON-EXISTENT');
                return res.status(404).json({ message: 'No user with that ID'});
            }

            res.json(user);
        } catch (error) {
            console.log('UPDATING USER ERROR');
            console.log(error);
            res.status(500).json(err);
        }
    },
    async deleteUser (req, res) {
        try {
            console.log('DELETING USER');
            const user = await User.findOneAndRemove({ _id: req.params.userId });
            const usernameToDelete = user?.username || '';
    
            if (!user) {
                console.log('DELETING USER NON-EXISTENT');
                return res.status(404).json({ message: 'No user with that ID' });
            }
    
            if (usernameToDelete != "") {
                const thought = await Thought.deleteMany(
                    { username: usernameToDelete },
                    { new: true }
                );
            }

            res.json({ message: 'Student successfully deleted' });
        } catch (error) {
            console.log('DELETING USER ERROR');
            console.log(error);
            res.status(500).json(error);
        }
    },
    async addFriend (req, res) {
        try {
            console.log('ADDING FRIEND TO USER');
            const friendUser = await User.findOne({ _id: req.params.friendId });

            if (!friendUser) {
                console.log('ADDING FRIEND NON-EXISTENT TO USER');
                return res.status(404).json({ message: 'No (friend) user with that ID'});
            }

            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
                //runValidators will make Mongoose check for compliance with schema
                //new makes application return the modified version (Default will be original)
            )
                .select('-__v');

            if (!user) {
                console.log('ADDING FRIEND TO USER NON-EXISTENT');
                return res.status(404).json({ message: 'No (target) user with that ID'});
            }

            res.json(user);
        } catch (error) {
            console.log('ADDING FRIEND TO USER ERROR');
            console.log(error);
            res.status(500).json(err);
        }
    },
    async deleteFriend (req, res) {
        try {
            console.log('DELETING FRIEND');

            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { runValidators: true, new: true }
                //runValidators will make Mongoose check for compliance with schema
                //new makes application return the modified version (Default will be original)
            )
                .select('-__v');

            if (!user) {
                console.log('DELETING FRIEND NON-EXISTENT (TARGET)');
                return res.status(404).json({ message: 'No (target) user with that ID'});
            }

            res.json(user);
        } catch (error) {
            console.log('DELETING USER ERROR');
            console.log(error);
            res.status(500).json(error);
        }
    },
}