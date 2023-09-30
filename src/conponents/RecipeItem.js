import { useParams } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

const RecipeItem = () => {
  const { id } = useParams();

  const { data: recipe, loading, error } = useFetch(id);

  const recipeItem = recipe.recipe;

  return (
    <div className="recipe-item container mx-auto py-10">
      <img
        src={recipeItem.image_url}
        alt={recipeItem.title}
        className="image"
      />
      <h2 className="title">{recipeItem.title}</h2>
    </div>
  );
};

export default RecipeItem;
