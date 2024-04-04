import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

//function-based component
// const About = () => {
//   return (
//     <div className="about">
//       <h1>Hi! This is about page.</h1>
//       <User name={"Rahul Kumar (functional)"} location={"Punjab(function)"} />
//       <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} />
//     </div>
//   );
// };

//About Class Based component
//v1.0
// class About extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//   }
//   componentDidMount() {
//     console.log("Parent Component Did Mount");
//   }

//   render() {
//     console.log("Parent Render");
//     return (
//       <div className="about">
//         <h1>Hi! This is class based about page.</h1>
//         <User name={"Rahul Kumar (functional)"} location={"Punjab(function)"} />
//         <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} />
//       </div>
//     );
//   }
// }

//v1.1
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div className="about">
        <h1>Hi! This is class based about page.</h1>
        {/* <User name={"Rahul Kumar (functional)"} location={"Punjab(function)"} /> */}
        <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} />
        {/* <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} />
        <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} /> */}
      </div>
    );
  }
}

export default About;
