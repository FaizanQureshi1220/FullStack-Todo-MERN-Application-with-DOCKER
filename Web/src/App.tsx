import { BrowserRouter , Routes , Route } from "react-router-dom"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Todos from "./components/Todos"
import Create from "./components/Create"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todos" element={<Todos/>} />
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
