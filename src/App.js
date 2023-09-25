import { Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import { useRef, useState } from "react";
import Home from "./conponents/Home";
import Favourites from "./conponents/Favourites";
import NotFound from "./conponents/NotFound";
import Footer from "./conponents/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState();
  const inputField = useRef(null);

  // search handler
  const searchHander = (e) => {
    e.preventDefault();
    console.log(searchQuery);

    setSearchQuery("");
    inputField.current.blur();
  };

  return (
    <>
      <div className="App min-h-screen bg-rose-50 text-lg text-gray-600">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchHander={searchHander}
          inputField={inputField}
        />
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
