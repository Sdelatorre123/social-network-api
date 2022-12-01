const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            rquired: true,
            unique: true,
            trime: true,
            validate: [validateEmail, "Please use a valid email"],
            match: [
                /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/,
                "Please enter a valid email address",
            ],
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
);

UserSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

const User = model('user', UserSchema);

module.exports = User;