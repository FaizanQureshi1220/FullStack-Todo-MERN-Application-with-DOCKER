import axios from "axios";
import { useEffect, useState } from "react";

export const getReq = () => {

    const [title , setTitle] = useState() ;
    const [description , setdescription] = useState() ;


    useEffect ( () => {
        axios.get ( "http://localhost:3002/todos" , {
            headers : {
                Authorization : localStorage.getItem("token")  
            }
        })
        .then ( response => {
            setTitle (response.data.todos.title) ;
            setdescription (response.data.todos.description) ;
        })
    } , [] )
   
    return {
        title ,
        description
    }
}

