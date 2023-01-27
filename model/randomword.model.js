const {Schema,model}= require('mongoose');
const UserSchema = new Schema({
naem:{}
});

const UserModel= model('user',UserSchema)
module.exports=UserModel;