import { useEffect, useState } from 'react';
import ItemList from './ItemList';
const URL = 'https://api.spoonacular.com/recipes/<ID>/information';
const KEY = '634645093fd145fea047f9aed7097db9';
const FoodDetail = ({ foodId }) => {
  const [food, setFood] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL.replace('<ID>', foodId)}?apiKey=${KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setLoading(false);
    };
    fetchFood();
  }, [foodId]);
  return (
    <>
      {loading ? (
        'Loading...'
      ) : (
        <div className="flex-1 ">
          <div className="ml-3">
            <h2 className="text-3xl font-bold mb-3 text-green-400">
              {food.title}
            </h2>
            <img className="rounded-t-lg-lg" src={food.image} alt="" />
            <div className="space-x-3 my-3 text-gray-700">
              <strong>👯 servings {food.servings}</strong>
              <strong>⏰ Ready in {food.readyInMinutes} Minutes</strong>
              <strong>
                {food.vegetarian ? '🥕 Vegetarian' : '🍖 Non Vegetarian'}
              </strong>
            </div>
            <div className="py-2">
              <strong>💰️ {(food.pricePerServing / 100).toFixed(2)}</strong>
            </div>
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider my-3">
                Ingredients
              </h2>
              <ItemList food={food} />
            </div>
            <div className="ml-10">
              <h2 className="text-lg font-bold uppercase tracking-wider mt-10 mb-4">
                Instructions
              </h2>
              <div className="font-bold text-zinc-600 ">
                <ol className="list-decimal space-y-3">
                  {food.analyzedInstructions[0].steps.map((instruction) => (
                    <li key={instruction.number}>{instruction.step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodDetail;
