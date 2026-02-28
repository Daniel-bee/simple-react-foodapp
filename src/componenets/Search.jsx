import { useEffect, useState } from 'react';
const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const KEY = '634645093fd145fea047f9aed7097db9';

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState('pizza');

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch(`${URL}?query=${query}&apiKey=${KEY}`);
      const data = await res.json();
      setFoodData(data.results);
    };
    fetchFood();
  }, [query]);

  return (
    <div className="flex justify-around">
      <input
        className="border-b-2 border-b-gray-400 pt-3 pb-1 p-l-0 outline-none text-2xl text-gray-400"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        name=""
        id=""
      />
    </div>
  );
};

export default Search;
