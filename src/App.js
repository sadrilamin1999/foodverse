import { Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import { useRef, useState } from "react";
import Home from "./conponents/Home";
import Favourites from "./conponents/Favourites";
import NotFound from "./conponents/NotFound";
import Footer from "./conponents/Footer";
import { useFetch } from "./conponents/hooks/useFetch";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputField = useRef(null);
  const { data: recipes, loading, error } = useFetch(searchQuery);

  // search handler
  const searchHander = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    setSearchQuery(searchValue);

    console.log(recipes);

    setSearchQuery("");
    inputField.current.blur();
  };

  return (
    <>
      <div className="App min-h-screen bg-rose-50 text-lg text-gray-600">
        <Navbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputField={inputField}
          searchHander={searchHander}
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
