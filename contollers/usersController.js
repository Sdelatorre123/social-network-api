const { ObjectId } = require('mongoose').Types;
const {User, Thought} = require('../models')

module.exports = {
    getAllUsers(req, res) {
        User.find()
        .then(user =>
            res.json(user))
            .catch((err) =>
            res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then(user =>
            res.json(user))
            .catch((err) =>
            res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId })
        .then(user =>
            !user
            ? res.status(404).json({ message: 'oops! No matching userId' })
            : res.json(user)
        )
        .catch((err) =>
        res.status(500).json(err))
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then(user =>
            !user
            ? res.status(404).json({ message: 'sorry! No matching userId' })
            : res.json(user)
        )
        .catch((err) =>
        res.status(500).json(err))
    },
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then(user =>
            !user
            ? res.status(404).json
    }
}