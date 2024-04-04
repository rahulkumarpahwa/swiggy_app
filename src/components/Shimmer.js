const Shimmer = () => {
  let arr = [];
  for (let i = 0; i < 15; i++) {
    arr.push(
      <div className="shimmer-card" key={i}>
        <div className="shimmer-img"></div>
        <h3></h3>
        <h4></h4>
        <h4></h4>
        <h4></h4>
      </div>
    );
  }
  return <div className="shimmer-container">{arr}</div>;
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
