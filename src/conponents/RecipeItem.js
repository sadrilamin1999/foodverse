import { Link, useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useEffect, useState } from "react";

const RecipeItem = ({ favouriteHandler, savedItems }) => {
  const [itemSavedStatus, setItemSavedStatus] = useState(null);
  const { id } = useParams();

  const { data: recipe, loading, error } = useFetch(id);

  const durationCalc = (duration) => {
    if (!duration) return;

    if (!String(duration).includes(".")) {
      return duration + "h";
    }
    if (String(duration).includes(".")) {
      return String(duration).replace(".", "h") + "min";
    }
  };

  useEffect(() => {
    if (!recipe) return;
    setItemSavedStatus(savedItems.some((item) => item.id === recipe.id));
  }, [recipe]);
  return (
    <div className="recipe-item container mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="left flex flex-col gap-10">
        <div className="image w-full h-80 overflow-hidden rounded-2xl shadow-xl shadow-rose-100 hover:scale-105 duration-300">
          <img
            className="w-full h-full overflow-hidden object-cover "
            src={recipe?.image_url}
            alt={recipe?.title}
          />
        </div>
        <div className="ings flex flex-col gap-3">
          <span className="ing-title text-2xl">Ingredients</span>
          <ul>
            {recipe?.ingredients?.map((ing, index) => (
              <li key={index}>
                ✔{ing.quantity}
                {ing.unit} {ing.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right flex flex-col gap-5">
        <span className="pusbisher">{recipe?.publisher}</span>
        <h2 className="title text-5xl">{recipe?.title}</h2>
        <div className="servings-coocking-time flex gap-5 uppercase tracking-widest font-semibold text-rose-500">
          <div className="servings">Servings: {recipe?.servings}</div>
          <div className="coocking-time">
            {recipe?.cooking_time < 60
              ? String(recipe?.cooking_time) + "min"
              : durationCalc(recipe?.cooking_time / 60)}
          </div>
        </div>
        <div className="btns flex gap-5">
          <button
            onClick={() => favouriteHandler(recipe?.id)}
            className={` p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md hover:shadow-lg  duration-300 ${
              itemSavedStatus
                ? "bg-gradient-to-br from-orange-400 to-orange-600 text-orange-50  shadow-orange-200 hover:shadow-orange-300"
                : "bg-gradient-to-br from-sky-400 to-sky-600 text-sky-50  shadow-sky-200 hover:shadow-sky-300"
            }`}
          >
            {itemSavedStatus
              ? "- Romeve from favourites"
              : "+ Save as favourite"}
          </button>
          <a
            href={recipe?.source_url}
            target="_blank"
            rel="noreferrer"
            className=" bg-gradient-to-br from-purple-400 to-purple-600 text-purple-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-300 duration-300"
          >
            Get directions
          </a>
          <Link
            to="/"
            className=" bg-gradient-to-br from-rose-400 to-rose-600 text-rose-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RecipeItem;
