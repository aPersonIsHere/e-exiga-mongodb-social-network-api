const { User, Thought } = require('../models/index');

module.exports = {
    async getUsers (req, res) {
        try {
            console.log('GETTING THOUGHTS');
            const thoughts = await Thought.find()
                .select('-__v');
            res.json(thoughts);
        } catch (error) {
            console.log('GETTING THOUGHTS ERROR');
            console.log(error);
            return res.status(500).json(err);
        }
    },   
}