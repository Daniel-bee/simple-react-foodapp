const ItemList = ({ food }) => {
  return (
    <div>
      {food.extendedIngredients.map((item) => (
        <div className={item.id}>
          <img
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt=""
          />
          <h3>{item.name}</h3>
          <h3>
            {item.amount} {item.unit}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
