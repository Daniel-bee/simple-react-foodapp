import Item from './Item';

const ItemList = ({ food }) => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      {food.extendedIngredients.map((item, id) => (
        <Item key={id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
