import { NavLink } from "react-router-dom";

const Navbar = ({
  searchHander,
  searchQuery,
  setSearchQuery,
  inputField,
  savedItems,
}) => {
  // nav active styles
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#06b6d4" : null,
    };
  };

  return (
    <div className="navbar py-8 flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 container mx-auto">
      <h2 className="logo text-2xl font-bold lowercase italic">
        food<sapn className="text-rose-500 ">verse</sapn>
      </h2>
      <form className="search-bar" onSubmit={searchHander}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search recipe..."
          className=" bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
        />
      </form>
      <ul className="menu flex gap-5">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300 flex gap-1"
          >
            Favourites
            <span className="w-[1.8rem] h-[1.8rem] bg-sky-600/90  rounded-[50%] flex justify-center items-center text-sm text-sky-100 font-semibold">
              {savedItems.length}
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
