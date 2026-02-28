const Item = ({ item }) => {
  return (
    <div>
      <div className="shadow-xl p-2 flex items-center gap-4 h-30">
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
          alt=""
        />
        <div className="text-lg font-bold text-zinc-600">
          <h3>{item.name}</h3>
          <h3>
            {item.amount} {item.unit}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Item;
