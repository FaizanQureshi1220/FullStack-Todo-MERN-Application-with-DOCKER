import express from "express" ;
const app = express() ;
const {todo , user} =  require("./db") ;
const {createTodo , createUser , userLogin} = require("./zod") ;
const bcrypt = require ('bcryptjs') ;
import jwt, { JwtPayload } from "jsonwebtoken" ;
require ("dotenv").config() ;
import cors from "cors" ;
app.use(express.json());
app.use(cors()) ; 

app.post ("/signup" , async (req , res) => {
    const userDetail = req.body ;    
    const parsedUser = await createUser.safeParse(userDetail) ;
    
    if (!parsedUser.success) {
        res.status(400).
        json({error: "Invalid user details"}) ;

        return ;
    }

    const existingUser = await user.findOne({ email: userDetail.email });

    if (existingUser) {
        res.status(400).json({ error: "Email already in use" });
        
        return ;
    }

    const hashedPassword = await bcrypt.hash(userDetail.password , 10) ;

    const newUser = await user.create ({
        name : userDetail.name ,
        email : userDetail.email ,
        password : hashedPassword
    })

    const userId = newUser._id ;
    const token = jwt.sign ( { userId } , process.env.JWT || "" ) ;

    res.json ({
        msg : "User Created" ,
        userId : userId ,
        token : token ,
    })
})

app.post ("/signin" , async (req , res) => {

    const userDetail = req.body ;    
    const parsedUser = await userLogin.safeParse(userDetail) ;
    
    if (!parsedUser.success) {
        res.status(400).
        json({error: "Invalid user details"}) ;

        return ;
    }

    const USER = await user.findOne ({
        email : userDetail.email ,
    })

    if (!USER) {
        res.status(400).
        json({msg: "User with this email not found"}) ;
    }

    const isValidPassword = await bcrypt.compare(userDetail.password , USER.password) ;

    if (!isValidPassword) {
        res.status(400).
        json({msg: "Invalid Password"}) ;
    }

    if(USER) {
        const token = jwt.sign ( 
            {userId : USER._id} , process.env.JWT || "" 
        ) ;
        res.json({
            msg : "User Logged In" ,
            userId : USER._id ,
            token : token 
        })
    }

})

app.post ("/create" , async (req , res) => {

    try {

        const todoDetail = req.body ;
        const parsedTodo = await createTodo.safeParse(todoDetail) ;
    
        if (!parsedTodo.success) {
            res.status(400).
            json({error: "Invalid todo details"}) ;
            return ;
        }

        const token = req.headers.authorization ;

        if (!token) {
            res.status(401).json({ error: "Authorization token missing" });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT || "");
        const userId = (decoded as JwtPayload).userId;

        const newTodo = await todo.create ({
            userId : userId ,
            title : todoDetail.title ,
            description : todoDetail.description ,
        })
    
        res.json ({
            msg :"todo created" ,
            todo : newTodo
        })
    }
    catch (e) {
        console.log(e);
    }

})

app.get ("/todos" ,  async (req , res) => {

    try {

        const token = req.headers.authorization;

        if (!token) {
            res.status(401).json({ error: "Authorization token missing" });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT || "");
        const userId = (decoded as JwtPayload).userId;

        if (!userId) {
            res.status(401).json({ error: "Invalid Token" });
            return;
        }
        const userTodos = await todo.find (
            {userId : userId}
        ) ;


        res.json ({
            todos : userTodos ,
        })
    }
    catch (e) {
        console.log(e); 
        res.json ({
            error : "Error fetching todos"
        })
    }
})

app.put ("/todos/:id" , async (req , res) => {

    try {
        const todoId = req.params.id ;
        const data = req.body ;
        const parsedUpdatedTodo = await createTodo.safeParse(data) ;

        if (!parsedUpdatedTodo) {
            res.status(400).json({ error: "Invalid request body" });
            return;
        }

        const token = req.headers.authorization ;
        if (!token) {
            res.json ({
                error : "Authorization Token missing"
            })
            return ;
        }

        const decode = jwt.verify (token , process.env.JWT || "")  as JwtPayload;
        const userId = decode.userId ;

        const updatedTodo = await todo.findOneAndUpdate(
            { _id: todoId, userId: userId },
            { $set: parsedUpdatedTodo.data },
            { new: true }
        ) ;

        if (!updatedTodo) {
            res.status(404)
            .json ({
                error : "Error Updating the todo" ,
                todo : updatedTodo
            })
        }

        res.status(200)
        .json ( {
            message : "Todo Updated Successfully",
        })
        return;
    }
    catch (e) {
        console.log(e);
        
    }
})


app.delete (`/todos/:id` , async (req , res) => {
    
    try {
        const todoId = req.params.id ;
        const deletedTodo = await todo.findByIdAndDelete(todoId) ;

        if (!deletedTodo) {
            res.status(404).json({ error: "Todo not found" });
            return ;
        }

        res.json ({
            message : "Todo deleted successfully"
        })
    }
    catch (e) {
        console.log(e);
    }
})


const port = 3002 ;
app.listen (port , () => {
    console.log(`port is running on port ${port}`);
}) ;


