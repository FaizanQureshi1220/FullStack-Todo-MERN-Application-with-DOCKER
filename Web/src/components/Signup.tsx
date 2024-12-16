import { useState } from "react";
import { EyeIcon , EyeOffIcon } from "lucide-react";
import s from "../assets/s.png" ;
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup () {

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const [postInputs , setPostInputs] = useState( {
      name : "" ,
      email : "" ,
      password : ""
    } )

    const navigate = useNavigate() ;

    async function signupReq () {

      try {
        const response = await axios.post ("http://localhost:3002/signup" , postInputs) ;

        const jwtToken = response.data.token ;
        localStorage.setItem ("token" , jwtToken) ;
        navigate ("/todos") ;
      }
      catch(e) {
        console.log(e) ;
      }
    }
  
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className="flex w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center w-1/2 pr-8">
            <div className="text-5xl font-extrabold mb-12">
              Sign-Up
            </div>
            <div className="w-full max-w-sm">
            <div className="mb-4">
                <label className="block mb-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John doe" 
                  className="w-full h-12 p-4 border rounded-lg"
                  onChange={ (e) => {
                    setPostInputs ( {
                      ...postInputs , 
                      name : e.target.value
                    } )
                  }}
                />
              </div>  
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input 
                  type="text" 
                  placeholder="johndoe@gmail.com" 
                  className="w-full h-12 p-4 border rounded-lg"
                  onChange={ (e) => {
                    setPostInputs ( {
                      ...postInputs , 
                      email : e.target.value
                    } )
                  }}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="******" 
                    className="w-full h-12 p-4 pr-10 border rounded-lg"
                    onChange={ (e) => {
                      setPostInputs ( {
                        ...postInputs , 
                        password : e.target.value
                      } )
                    }}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <button 
                className="w-full py-3 px-4 bg-red-500 text-white text-xl font-semibold rounded-full hover:bg-red-600 transition duration-300"
                onClick={signupReq}
              >
                Sign Up
              </button>
              <div className="mt-4 text-sm text-gray-600">
                By continuing with Email, you agree to Todoist's Terms of Services and Privacy Policy.
              </div> 
              <div className="mt-4 text-center">
                Already have an account? <a href="/signin" className="underline text-red-500 hover:text-red-600">Sign in</a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img 
              src={s}
              alt="Signin illustration"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    );
}

export default Signup ;