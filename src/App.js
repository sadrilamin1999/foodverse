import { Route, Routes } from "react-router-dom";
import { useRef, useState } from "react";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Favourites from "./conponents/Favourites";
import NotFound from "./conponents/NotFound";
import Footer from "./conponents/Footer";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputField = useRef(null);

  // search handler
  const searchHander = (e) => {
    e.preventDefault();

    getData(searchQuery);

    setSearchQuery("");
    inputField.current.blur();
  };

  const getData = async (searchQuery) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`
      );
      if (!res.ok) throw new Error("No recipe found!");
      const data = await res.json();
      console.log(data);
      setRecipes(data.recipes);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
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
          <Route
            path="/"
            element={<Home recipes={recipes} loading={loading} error={error} />}
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
