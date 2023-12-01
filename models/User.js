const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            //Regex from Module 17 UT Austin Bootcamp EdX.
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user',
        },]
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return `${this.friends.length}`
    });

const User = model('user', userSchema);

module.exports = User;