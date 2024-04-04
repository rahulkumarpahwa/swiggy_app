//v1.0
// const User = () => {
//   return (
//     <div className="user-card">
//       <h2>Name : Rahul</h2>
//       <h3>Location : Punjab</h3>
//       <h4>contact : @rahulkumarpahwa</h4>
//     </div>
//   );
// };

//v1.1
// const User = (props) => {
//   return (
//     <div className="user-card">
//       <h2>Name : {props.name}</h2>
//       <h3>Location : Punjab</h3>
//       <h4>contact : @rahulkumarpahwa</h4>
//     </div>
//   );
// };

//v1.2
// const User = (props) => {
//   return (
//     <div className="user-card">
//       <h2>Name : {props.name}</h2>
//       <h3>Location : {props.location}</h3>
//       <h4>contact : @rahulkumarpahwa</h4>
//     </div>
//   );
// };

//v1.3
// const User = (props) => {
//   const { name, location } = props;
//   console.log(props);
//   return (
//     <div className="user-card">
//       <h2>Name : {name}</h2>
//       <h3>Location : {location}</h3>
//       <h4>contact : @rahulkumarpahwa</h4>
//     </div>
//   );
// };

//v1.4
import { useState } from "react";
// const User = (props) => {
//   const [count] = useState(0);
//   const { name, location } = props;
//   console.log(props);
//   return (
//     <div className="user-card">
//         <h1>Count : {count}</h1>
//       <h2>Name : {name}</h2>
//       <h3>Location : {location}</h3>
//       <h4>contact : @rahulkumarpahwa</h4>
//     </div>
//   );
// };

//v1.5
// const User = (props) => {
//   const [count] = useState(0);
//   const [count2] = useState(1);
//   const { name, location } = props;
//   console.log(props);
//   return (
//     <div className="user-card">
//       <h1>Count : {count}</h1>
//       <h1>Count : {count2}</h1>
//       <h2>Name : {name}</h2>
//       <h3>Location : {location}</h3>
//       <h4>contact : @rahulkumarpahwa</h4>
//     </div>
//   );
// };

//v1.6
// const User = (props) => {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(1);
//   const { name, location } = props;
//   console.log(props);
//   return (
//     <div className="user-card">
//       <h1>Count : {count}</h1>
//       <h1>Count : {count2}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setCount2(count2 + 1);
//         }}
//       >
//         Increase Count
//       </button>
//       <h2>Name : {name}</h2>
//       <h3>Location : {location}</h3>
//       <h4>contact : @rahulkumarpahwa</h4>
//     </div>
//   );
// };

//v1.7
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const { name, location } = props;
  // console.log(props);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count : {count2}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount2(count2 + 1);
        }}
      >
        Increase Count
      </button>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>contact : @rahulkumarpahwa</h4>
    </div>
  );
};

export default User;
