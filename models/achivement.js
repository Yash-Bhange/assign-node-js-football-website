var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var acSchema = new Schema({
    topic: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var achs = mongoose.model('ach', acSchema);

module.exports = achs;