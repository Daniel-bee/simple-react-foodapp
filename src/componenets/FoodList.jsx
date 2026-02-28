import FoodItem from './FoodItem';
import InnerContainer from './InnerContainer';

const FoodList = ({ foodData, setFoodId }) => {
  return (
    <div className="w-150">
      {foodData.map((food) => (
        <FoodItem key={food.id} setFoodId={setFoodId} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
