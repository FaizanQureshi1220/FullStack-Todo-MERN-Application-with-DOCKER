import mongoose from "mongoose";
require ("dotenv").config() ;

mongoose.connect(process.env.DATABASE_URL || "")
.then( () => console.log("DB connected"))
.catch( () => console.log("Connection Error"))


const TodoSchema = new mongoose.Schema({
    todoid : String ,
    userId: String,
    title: String,
    description: String,
}) ;

const UserSchema = new mongoose.Schema ({
    userId : String ,
    name : String ,
    email : String ,
    password : String ,
})

const todo = mongoose.model ("todo" , TodoSchema) ;
const user = mongoose.model ("user" , UserSchema) ;

module.exports = {
    todo ,
    user
}