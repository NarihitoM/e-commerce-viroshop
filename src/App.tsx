import { BrowserRouter,Routes,Route } from "react-router-dom"
import Mainpage from "./main/mainpage.tsx";
import Home from "./main/home.tsx";
import Features from "./main/features.tsx";
import Blog from "./main/blog.tsx";

function App() {

   return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage><Home/></Mainpage>} />
      <Route path="/home" element={<Mainpage><Home/></Mainpage>} />
      <Route path="/features" element={<Mainpage><Features/></Mainpage>} />
      <Route path="/blog" element={<Mainpage><Blog/></Mainpage>} />
    </Routes>
    </BrowserRouter>
    </>
   )
}

export default App
