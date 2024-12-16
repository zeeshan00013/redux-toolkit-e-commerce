import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./pages/Navbar";
import Animation from "./pages/Animation";

const App = () => {
  return (
    <div className="bg-slate-500 min-h-[100vh] text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Animation /> */}
    </div>
  );
};

export default App;
