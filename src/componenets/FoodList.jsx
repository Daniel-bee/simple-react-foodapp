const FoodList = ({ foodData }) => {
  return (
    <>
      {foodData.map((food) => (
        <div>{food.title}</div>
      ))}
    </>
  );
};

export default FoodList;
