const userInfo = require('../model/UserInfo');
const createUID = require('./createUniqueID');

const createUser = async (req,res)=>{
    try{
        const data = req.body;
        data.UID = await createUID();
        const user = await userInfo.create(data);
        res.status(200).json({user});
    }catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }
}


module.exports = createUser;