import useGrocery from "../../utils/useGrocery";

const Grocery = () => {
  const grocery = useGrocery();
  console.log(grocery);
  return (
    <h1>
      {" "}
      Our Grocery Online store, and we have a lot of child components inside
      this webpage!!
    </h1>
  );
};

export default Grocery;
