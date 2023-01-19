const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const ageEnum = require("../enums/ageEnum");

const userSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    userName:{type:String, required:true, unique: true},
    password:{type:String, required:true},
    age:{default: ageEnum[0], enum: [...ageEnum]},
});

const User = mongoose.model("users", userSchema);

const selectAllUsers = () =>{
    return User.find({});
};

const createNewUser = (userData) => {
    const user = new User (userData);
    return user.save();
}

const updateUserById=( id,firstName,
    lastName,
    userName,
    password,
    age)=>{
        return User.findByIdAndUpdate(id,{
            firstName,
            lastName,
            userName,
            password,
            age,
        })
}

const deleteUserById = (id)=>{
    return User.findByIdAndDelete(id);
}

module.exports={selectAllUsers,
createNewUser, 
updateUserById,
deleteUserById
};