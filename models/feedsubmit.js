var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var submitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var feedsubmits = mongoose.model('feedsubmit', submitSchema);

module.exports = feedsubmits;