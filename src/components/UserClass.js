import React from "react";

//v1.0
// class UserClass extends React.Component {
// render(){
//     return (
//       <div className="user-card">
//         <h2>Name : Rahul</h2>
//         <h3>Location : Punjab</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
// }
// };

//v1.1
// class UserClass extends React.Component {
//     constructor(props){
//         super(props);
//     }
// render(){
//     return (
//       <div className="user-card">
//         <h2>Name : {this.props.name}</h2>
//         <h3>Location : Punjab</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
// }
// };

//v1.2
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }
//   render() {
//     return (
//       <div className="user-card">
//         <h2>Name : {this.props.name}</h2>
//         <h3>Location : {this.props.location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.3
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }
//   render() {
//     const { name, location } = this.props;
//     return (
//       <div className="user-card">
//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.4
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     console.log(props);
//   }
//   render() {
//     const { name, location } = this.props;
//     return (
//       <div className="user-card">
//         <h1>Count : {this.state.count}</h1>
//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.5
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//     console.log(props);
//   }
//   render() {
//     const { name, location } = this.props;
//     const { count} = this.state;
//     return (
//       <div className="user-card">
//         <h1>Count : {count}</h1>
//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.6
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       count2: 2,
//     };
//     console.log(props);
//   }
//   render() {
//     const { name, location } = this.props;
//     const { count, count2 } = this.state;
//     return (
//       <div className="user-card">
//         <h1>Count : {count}</h1>
//         <h1>Count : {count2}</h1>
//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.7
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       count2: 2,
//     };
//     console.log(props);
//   }
//   render() {
//     const { name, location } = this.props;
//     const { count, count2 } = this.state;
//     return (
//       <div className="user-card">
//         <h1>Count : {count}</h1>

//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Count Increase
//         </button>
//         <h1>Count : {count2}</h1>
//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.8
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       count2: 2,
//       count3: 3,
//       count4: 4,
//     };
//     console.log(props);
//   }
//   render() {
//     const { name, location } = this.props;
//     const { count, count2, count3, count4 } = this.state;
//     return (
//       <div className="user-card">
//         <h1>Count : {count}</h1>
//         <h1>Count 2 : {count2}</h1>
//         <h1>Count 3 : {count3}</h1>
//         <h1>Count 4 : {count4}</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//               count2: this.state.count2 + 1,
//             });
//           }}
//         >
//           Count Increase
//         </button>

//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.9
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       count2: 2,
//       count3: 3,
//       count4: 4,
//     };
//     console.log(props);
//   }
//   render() {
//     const { name, location } = this.props;
//     const { count, count2, count3, count4 } = this.state;
//     return (
//       <div className="user-card">
//         <h1>Count : {count}</h1>
//         <h1>Count 2 : {count2}</h1>
//         <h1>Count 3 : {count3}</h1>
//         <h1>Count 4 : {count4}</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//               count2: this.state.count2 + 1,
//             });
//           }}
//         >
//           Count Increase
//         </button>

//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

import { Component } from "react";

//v1.10
// class UserClass extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Child Constructor");
//     this.state = {
//       count: 0,
//       count2: 2,
//       count3: 3,
//       count4: 4,
//     };
//     // console.log(props);
//   }

//   componentDidMount() {
//     console.log("Child Component Did Mount");
//   }

//   render() {
//     const { name, location } = this.props;
//     const { count, count2, count3, count4 } = this.state;
//     console.log("Child Render");
//     return (
//       <div className="user-card">
//         <h1>Count : {count}</h1>
//         <h1>Count 2 : {count2}</h1>
//         <h1>Count 3 : {count3}</h1>
//         <h1>Count 4 : {count4}</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//               count2: this.state.count2 + 1,
//             });
//           }}
//         >
//           Count Increase
//         </button>

//         <h2>Name : {name}</h2>
//         <h3>Location : {location}</h3>
//         <h4>contact : @rahulkumarpahwa</h4>
//       </div>
//     );
//   }
// }

//v1.11
import { Link } from "react-router-dom";
class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor");
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url:
          "https://th.bing.com/th/id/OIP.K0aAoODcNXhaH6qkW6WQUQHaIc?rs=1&pid=ImgDetMain",
      },
    };
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/rahulkumarpahwa");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount(){
    console.log("Child Component Will Unmount");
  }

  render() {
    // const { name, location } = this.props;
    console.log("Child Render");
    const { name, location } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card flex justify-center gap-20">
        <img
          src={this.state.userInfo.avatar_url}
          style={{ width: "200px", height: "200px" }}
          className="rounded-lg"
        />
        <div className="font-semibold">
          <h2>{name}</h2>
          <h3>{location}</h3>
          <h4>
            <Link to="https://github.com/rahulkumarpahwa" className="hover:underline">@rahulkumarpahwa</Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
