const { User, Thought } = require('../models/index');

module.exports = {
    async getThoughts (req, res) {
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
    async getSingleThought (req, res) {
        try {
            console.log('GETTING THOUGHT');
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                console.log('GETTING THOUGHT NON-EXISTENT');
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (error) {
            console.log('GETTING THOUGHT ERROR');
            console.log(error);
            return res.status(500).json(err);
        }
    },
    async createThought (req, res) {
        try {
            console.log('CREATING THOUGHT');
            const newThought = await Thought.create(req.body);

            const userThought = await User.findOneAndUpdate(
                { username: newThought.username },
                { $addToSet: { thoughts: newThought._id } },
                { runValidators: true, new: true }
            );

            res.json(newThought);
        } catch (error) {
            console.log('CREATING THOUGHT ERROR');
            console.log(error);
            return res.status(500).json(err);
        }
    },
    async updateThought (req, res) {
        try {
            console.log('UPDATING THOUGHT');
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            )
                .select('-__v');

            if (!thought) {
                console.log('UPDATING THOUGHT NON-EXISTENT');
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json(thought);
        } catch (error) {
            console.log('UPDATING THOUGHT ERROR');
            console.log(error);
            res.status(500).json(err);
        }
    },
    async deleteThought (req, res) {
        try {
            console.log('DELETING THOUGHT');
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtId });
            
            if (!thought) {
                console.log('DELETING THOUGHT NON-EXISTENT');
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({ message: 'Thought successfully deleted' })
        } catch (error) {
            console.log('DELETING THOUGHT ERROR');
            console.log(error);
            res.status(500).json(error);
        }
    },
    async createReaction (req, res) {
        try {
            console.log('CREATING REACTION');
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body }},
                { runValidators: true, new: true }
            )
                .select('-__v');

            if (!thought) {
                console.log('CREATING REACTION THOUGHT NON-EXISTENT');
                return res.status(404).json({ message: 'No thought with that ID'});
            }

            res.json(thought);
        } catch (error) {
            console.log('CREATING REACTION ERROR');
            console.log(error);
            res.status(500).json(error);
        }
    },
    async deleteReaction (req, res) {
        try {
            console.log('DELETING REACTION');
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            )
                .select('-__v');

            if (!reaction) {
                console.log('DELETING REACTION NON-EXISTENT (TARGET)');
                return res.status(404).json({ message: 'No (target) thought with that ID'});
            }

            res.json(reaction);
        } catch (error) {
            console.log('DELETING REACTION ERROR');
            console.log(error);
            res.status(500).json(error);
        }
    }
}