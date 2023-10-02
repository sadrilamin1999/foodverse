import Racipe from "./Recipe";
const Favourites = ({ savedItems }) => {
  return (
    <div className="favourite-section">
      {savedItems.length === 0 && (
        <p className="text-center text-rose-400 text-2xl lg:text-4xl font-semibold tracking-wider mt-10">
          Favourite list is empty!
        </p>
      )}
      <div className="favourite-items-container container mx-auto py-10 flex flex-wrap gap-10 justify-center">
        {savedItems.map((recipe) => (
          <Racipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
