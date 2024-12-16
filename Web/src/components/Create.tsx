import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

function Create() {
    const [todoData, setTodoData] = useState({
        title: "",
        description: ""
    });
    const navigate = useNavigate();
    const createTodo = async () => {
        await axios.post("http://localhost:3002/create", todoData, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        navigate("/todos");
    };

    const goback = () => {
        navigate("/todos") ;
    }
        return (
            <div className="min-h-screen bg-gray-100 p-4 relative">
              <button 
                className="absolute left-4 top-4 p-2 px-4 bg-red-500 text-white rounded text-lg font-bold"
                onClick={goback}
              >
                Back
              </button>
              <div className="flex items-center justify-center min-h-screen">
                <div className="max-w-2xl w-full bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-4xl font-extrabold text-center text-red-500 mb-6">Create New Todo</h2>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          placeholder="Enter todo title"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          id="description"
                          placeholder="Enter todo description"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-32"
                          onChange={(e) => setTodoData({ ...todoData, description: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        onClick={createTodo}
                      >
                        <PlusCircle className="mr-2" size={20} />
                        Create Todo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
}

export default Create;