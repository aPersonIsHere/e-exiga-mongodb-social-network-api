const router = require('express').Router();
const { 
    getThoughts,
    //getSingleThought,
    //createThought,
    //updateThought,
    //deleteThought,
    //addReaction,
    //deleteReaction
} = require('../../controllers/thoughtController');

router.route("/")
    .get(getThoughts);

module.exports = router;
