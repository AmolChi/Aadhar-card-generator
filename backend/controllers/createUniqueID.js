const mongoose = require('mongoose');
const User = require('../model/UserInfo');

const createUID = async()=>{
    try{
        while(true){
            const randomObjectId = new mongoose.Types.ObjectId();
            const hashedUserId = randomObjectId.toHexString().slice(0,16);
            const existingUser = await User.findOne({userId:hashedUserId});
            if(!existingUser){
                return hashedUserId;
            }
        }
    }catch(err){
        throw err;
    }
}

module.exports = createUID;