import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Details from "./Details";
import Favorites from "./Favorites";

function App() {
  return (
    <>
     <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Favorites" element={<Favorites />} />
           <Route path="/RecipeItem/:id" element={<Details />} />           
         </Routes>
     </div>
    </>
  );
}

export default App;
