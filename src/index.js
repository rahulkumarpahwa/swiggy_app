//case 1:
// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "head" },
//   "hello from react"
// );
// console.log(heading); //object
// props: {id: 'heading', className: 'head', children: 'hello from react'}

//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//case 2:
/*
<div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    </div>
</div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am H1 tag")
//   )
// );
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//case 3:

/*
<div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    <h2>I am H2 tag</h2>
    </div>
</div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1 tag"),
//     React.createElement("h2", {}, "I am H2 tag"),
//   ])
// );
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//case 4:

/*
<div id="parent">
    <div id="child">
    <h1>I am H1 tag</h1>
    <h2>I am H2 tag</h2>
    </div>
    <div id="child2">
    <h1>I am H1 tag</h1>
    <h2>I am H2 tag</h2>
    </div>
</div>
*/

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1 tag"),
//     React.createElement("h2", {}, "I am H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am H1 tag"),
//     React.createElement("h2", {}, "I am H2 tag"),
//   ]),
// ]);
// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//case 5:

// const heading = React.createElement("h1", {id:"heading"}, "Hi!, I am Heading");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//case 6:

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hi!, I am Heading"
// );
// console.log(heading);

//JSX-HTML LIKE SYNTAX OR XML LIKE SYNTAX
// const jsxHeading = (
//   <h1 id="heading" className="head">
//     Namaste react using jsx
//   </h1>
// );
// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//case 7:

//react element
// const heading = (
//   <h1 id="heading" className="head">
//     Namaste react using jsx
//   </h1>
// );
// console.log(heading);

//react component
// const HeadingComponent = () => <h1>Namaste React Functional Component</h1>; //shorthand

// const HeadingComponent2 = () => (
//   <h1 className="heading">Namaste React Functional Component</h1>
// ); //shorthand with multiple lines

// const HeadingComponent3 = () => {
//   return <h1 className="heading">Namaste React Functional Component</h1>;
// }; // with return keyword

// const HeadingComponent4 = () => (
//   <div id="container">
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(<HeadingComponent4/>); //rendering the component

//case 8:
//react component
// const Title = () => (
//   <h1 id="heading" className="head">
//     Namaste react using jsx
//   </h1>
// );

//component composition
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />  {/* inserting the functional component inside another component */}
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />); //rendering the component

//case 9:

//react component
// const Title = function () {
//   return (
//     <h1 id="heading" className="head">
//       Namaste react using jsx
//     </h1>
//   );
// };

//component composition
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     {/* inserting the functional component inside another component */}
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />); //rendering the component

//case 10:
// const Title = function () {
//   return (
//     <h1 id="heading" className="head">
//       Namaste react using jsx
//     </h1>
//   );
// };

// const number = 10000;

// const HeadingComponent = () => (
//   <div id="container">
//     {/* javascript inside JSX */}
//     {number}
//     <h2>{number}</h2>
//     <h2>{100 + 200}</h2>
//     <h2>{console.log("asasassasasa")}</h2>

//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />); //rendering the component

//case 11:
// const title = (
//   <h1 id="heading" className="head">
//     Namaste react using jsx
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />); //rendering the component

//case 12:
// const elem = <span>React element</span>;

// const title = (
//   <h1 id="heading" className="head">
//     {elem}
//     Namaste react using jsx
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />); //rendering the component

//case 13:
// const HeadingComponent = () => (
//   <div id="container">
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const title = (
//   <h1 id="heading" className="head">
//     Namaste react using jsx
//     <HeadingComponent />
//   </h1>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title); //rendering the component

//case 14:
// const Title = () => (
//   <h1 id="heading" className="head">
//     Namaste react using jsx
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {Title()}
//     <Title/>
//     <Title></Title>
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// ); //nesting

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />); //rendering the component

/****************************************episode 3 ended above *******************************************/

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./components/Grocery"));
// const About = lazy(() => import("./components/About"));
const AboutNew = lazy(() => import("./components/AboutNew"));

import UserContext from "../utils/UserContext";

//component composition
const AppLayout = () => {
  const [userName, setUserName] = useState("Rahul K.");
  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setUserName: setUserName }}
    >
      <div className="app">
        {/* <UserContext.Provider value={{loggedInUser : "Apple"}}> */}
          <Header />
        {/* </UserContext.Provider> */}
        {/* <Body /> */}
        {/* body is replaced by outlet and outlet changes the page according to the route which we call. */}
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About!!!</h1>}>
            <AboutNew />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading!!!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
  // { path: "/about", element: <About /> },
  // { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />); //rendering the component
root.render(<RouterProvider router={appRouter} />);
