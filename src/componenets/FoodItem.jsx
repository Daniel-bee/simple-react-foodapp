const FoodItem = ({ food, setFoodId }) => {
  return (
    <div className="bg-white  rounded-2xl shadow-2xl w-75">
      <img src={`${food.image}`} className="rounded-t-2xl" alt="" />
      <div className="flex flex-col items-center p-3 space-y-3">
        <h2 className="font-bold text-lg">{food.title}</h2>
        <button
          onClick={() => setFoodId(food.id)}
          className="bg-green-500 px-3 py-1.5 text-sm font-bold text-green-100 tracking-wide"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
