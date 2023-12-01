const { createThought } = require('../../controllers/thoughtController');

const router = require('express').Router();

router.route("/").post(createThought);

module.exports = router;
