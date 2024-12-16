import {z} from "zod" ;

const createUser = z.object ({
    name : z.string().optional() ,
    email : z.string().email() ,
    password : z.string() ,
}) ;

const userLogin = z.object ({
    email : z.string().email() ,
    password : z.string() 
})

const createTodo =  z.object ({
    title : z.string().min(5),
    description : z.string().min(5)
}) ;

module.exports = {
    createUser ,
    userLogin ,
    createTodo
}