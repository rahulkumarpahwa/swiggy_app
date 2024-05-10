const Shimmer = () => {
  let arr = [];
  for (let i = 0; i < 15; i++) {
    arr.push(
      <div
        className="res-card w-72 h-[20rem] m-4 p-2 rounded-lg bg-white hover:opacity-80 shadow-[1px_5px_8px_rgba(0,_0,_0,_0.134)] hover:scale-110 duration-150 mt-10"
        key={i}
      >
        <div className="shimmer-img w-full h-[70%] bg-neutral-400 rounded-lg"></div>
        <div className="flex flex-col my-3">
          <h3 className="w-20 h-2 my-1 rounded-2xl bg-neutral-400"></h3>
          <h4 className="w-20 h-2 my-1 rounded-2xl bg-neutral-400"></h4>
          <h4 className="w-20 h-2 my-1 rounded-2xl bg-neutral-400"></h4>
          <h4 className="w-20 h-2 my-1 rounded-2xl bg-neutral-400"></h4>
        </div>
      </div>
    );
  }
  return (
    <div className="shimmer-container flex flex-wrap justify-center items-center mt-20 w-full ">
      {arr}
    </div>
  );
};
export default Shimmer;

//akshay's code
// const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//       <div className="shimmer-cards"></div>
//     </div>
//   );
// };
// export default Shimmer;
