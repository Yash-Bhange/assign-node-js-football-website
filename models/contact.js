var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var contactSchema = new Schema({
    position: {
        type: String,
        required: true,
        default: "main"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var contacts = mongoose.model('contact', contactSchema);

module.exports = contacts;