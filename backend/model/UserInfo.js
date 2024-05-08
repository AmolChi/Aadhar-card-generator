const mongoose = require('mongoose');

const UserInfo = mongoose.Schema({
    "Name":{
        type:String,
        required:[true,'Must provide a name'],
        trim:true
    },
    "DOB":{
        type:String,
        required:[true,'Must provide a date of birth'],
    },
    "Address":{
        type:String,
        required:[true,'Must provide an address'],
        trim:true,
    },
    "ContactInfo":{
        type:String,
        required:[true,'Must provide a contact information'],
        trim:true,
    },
    "UID":{
        type:String,
        required:[true,'Must have a UID'],
        trim:true,
        unique:true
    }
})


module.exports = mongoose.model('UserInfo',UserInfo);