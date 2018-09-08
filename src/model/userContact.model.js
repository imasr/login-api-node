import mongoose from "mongoose";

const ContactRequestStatus = Object.freeze({
    0: 'sent',
    1: 'received',
    2: 'blocked'
})

var ContactSchema = mongoose.Schema({
    contact_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    requestStatus: {
        type: String,
        required: true,
        enum: Object.values(ContactRequestStatus),
    }
}, {
    _id: false,
    timestamps: true,
    versionKey: false,
})

var UserContactSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    contact: [ContactSchema]
}, {
    timestamps: true,
    versionKey: false
})

var UserContact = mongoose.model('UserContact', UserContactSchema);

module.exports = {
    UserContact,
    ContactRequestStatus
}