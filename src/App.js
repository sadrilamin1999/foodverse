import { Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Favourites from "./conponents/Favourites";
import NotFound from "./conponents/NotFound";
import Footer from "./conponents/Footer";

const App = () => {
  return (
    <>
      <div className="App min-h-screen bg-rose-50 text-lg text-gray-600">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
