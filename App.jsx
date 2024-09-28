import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Errorpage from "./Pages/Errorpage";

const App=()=>{

  return (
    < >
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>} >
       <Route path="home" element={<Home/>}/>
       <Route path="about" element={<About/>}/>
       <Route path="contact" element={<Contact/>}/>
       <Route path="*" element={<Errorpage/>}/>
     </Route>
    </Routes>
</BrowserRouter>


    </>
  )
}

export default App;

    

      

       


