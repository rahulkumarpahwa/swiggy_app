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

import UserContext from "../../utils/UserContext";


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
      <div className="about flex items-center flex-col justify-center m-8">
        <h2 className="font-bold">Introduction: </h2>
        <h1 className="my-3 font-semibold">
          Hi! My Name is Rahul Kumar. I am a Mern Stack developer. This is class
          based about page.
        </h1>
        {/* <User name={"Rahul Kumar (functional)"} location={"Punjab(function)"} /> */}
        <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} />
        {/* <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} />
        <UserClass name={"Rahul Kumar (class)"} location={"Punjab(class)"} /> */}

        {/* <UserContext.Consumer>
          {(data) => console.log(data)}
        </UserContext.Consumer> */}

        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className="my-4 font-bold text-xl">Logged In User : {loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
