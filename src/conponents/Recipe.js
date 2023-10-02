import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe w-80 overflow-hidden bg-white/75 rounded-2xl p-3 gap-5 border-2 border-rode-50 shadow-lg shadow-rose-100 flex gap-3 flex-col">
      <img
        className="h-40 w-full rounded-lg overflow-hidden object-cover"
        src={recipe.image_url}
        alt={recipe.title}
      />

      <div className="texts ">
        <samp className="publisher text-xs text-sky-400 uppercase font-semibold -tracking-widest">
          {recipe.publisher_url}
        </samp>
        <h2 className="title text-2xl font-semibold truncate">
          {recipe.title}
        </h2>
        <Link
          to={`/recipe-item/${recipe.id}`}
          className="bg-gradient-to-br from-rose-400 to-rose-600 self-start text-rose-50 text-sm uppercase font-medium tracking-wider p-3 px-8 rounded-lg mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300 "
        >
          View recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
