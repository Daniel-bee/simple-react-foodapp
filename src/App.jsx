import { useState } from 'react';
import Search from './componenets/Search';
import FoodList from './componenets/FoodList';

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </>
  );
}

export default App;
