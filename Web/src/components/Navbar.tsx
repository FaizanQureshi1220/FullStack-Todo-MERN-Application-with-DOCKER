import { Link, useLocation, useNavigate } from "react-router-dom";
function Navbar () {

    const location =  useLocation() ;
    const navigate = useNavigate() ;

    const logout = () => {
        localStorage.removeItem('token') ;
        navigate ("/") ;

    }

    return (
        <div className="flex justify-between m-8">
            <div className="text-4xl pl-8 font-extrabold text-red-500">
                Todoist
            </div>

            {location.pathname === "/" ? 
                <div className="">
                    <Link to={"/signin"}>
                        <span className=" text-xl font-bold"> Login </span>
                    </Link>
                    <Link to={"/signup"}>
                        <button className="ml-4 p-2 px-4 bg-red-500 text-white rounded text-lg font-bold">Start for Free</button>
                    </Link>
                </div> :

                <div>
                    <Link to={"/create"}>
                    <button className="ml-4 p-2 px-4 bg-red-500 text-white rounded text-lg font-bold">Create new Todo</button>
                    </Link>
                    <Link to={"/"}>
                    <button 
                    className="ml-4 p-2 px-4 bg-red-500 text-white rounded text-lg font-bold"
                    onClick={logout}
                    >Logout</button>
                    </Link>
                </div>

            }

            
        </div>
    )
}

export default Navbar ;