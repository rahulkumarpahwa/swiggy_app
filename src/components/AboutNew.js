import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/rahulkumarpahwa");
    const json = await data.json();
    console.log(json);
    setData(json);
  };

  fetchData();

  return data != undefined ? (
    <div className="py-12 h-[55rem]">
      <div className="flex items-center justify-center gap-10">
        <div>
          <h3 className="text-center my-4 text-bold text-sans">Build By :</h3>
          <div className="border border-gray-500 max-w-[17rem] rounded-lg hover:border-black">
            <Link to={data.html_url}>
              <img
                src={data.avatar_url}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-tl-lg rounded-tr-lg"
                alt={data.name}
              />
              <div className="p-2">
                <h2 className="text-xl text-center text-bold ">{data.name}</h2>
                <p className="text-gray-500 hover:text-black">{data.bio}</p>
                <p className="text-gray-500 hover:text-black">
                  X :{" "}
                  <Link
                    to={`https://twitter.com/${data.twitter_username}`}
                    target="_blank"
                  >
                    @rahulkumarpahwa
                  </Link>
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-4xl font-sans font-bold">About Us </h2>
          <p className="text-base">
            This is an Food Ordering App made using Reactjs + Parcel. It is the
            starting Project Through which I learn React & its Parts. Things I
            learned are :
            <div className="border border-gray-500 rounded-lg grid grid-cols-4 gap-2 my-2 px-1">
              <div className="p-2">
                <ul className="ml-4 my-2 space-y-2 list-disc">
                  <li>React</li>
                  <li>React Element</li>
                  <li>JSX</li>
                  <li>Transpile by Babel.js</li>
                  <li>Parcel / Bundler</li>
                  <li>HMR (Hot Module Replacement)</li>
                  <li>BrowserList</li>
                  <li>React DOM</li>
                  <li>Functional Components</li>
                  <li>Class Based Components</li>
                </ul>
              </div>
              <div className="p-2">
                <ul className="ml-4 my-2 space-y-2 list-disc">
                  <li>UI Mock</li>
                  <li>React Props</li>
                  <li>Config Driven UI</li>
                  <li>Swiggy API</li>
                  <li>Optional Chaining</li>
                  <li>React Hooks</li>
                  <li>React Conciliation Algorithm</li>
                  <li>Virtual DOM</li>
                  <li>Monolith vs Microservices </li>
                  <li>CORS</li>
                </ul>
              </div>
              <div className="p-2 rounded-lg">
                <ul className="ml-4 my-2 space-y-2 list-disc">
                  <li>Shimmer UI</li>
                  <li>Map & Filter</li>
                  <li>React-Router-Dom</li>
                  <li>Children Routing</li>
                  <li>useRouterError</li>
                  <li>SPA (Single Page Application)</li>
                  <li>useParams</li>
                  <li>React Life Cycle Methods</li>
                  <li>Custom Hooks</li>
                  <li>Lazing Loading / Dynamic Bundling </li>
                </ul>
              </div>
              <div className="p-2 rounded-lg">
                <ul className="ml-4 my-2 space-y-2 list-disc">
                  <li>TailwindCSS</li>
                  <li>Higher Order Components</li>
                  <li>Uncontrolled / Controlled Component</li>
                  <li>Lifting Up the State</li>
                  <li>Props Drilling</li>
                  <li>React Context</li>
                  <li>Redux Toolkit</li>
                  <li>React-Redux Library</li>
                  <li>And Still learning....</li>
                </ul>
              </div>
            </div>
          </p>
          <p className="text-bold text-3xl">TechStack: </p>
          <div className="grid grid-cols-2">
            <ul className="ml-4 space-y-1 list-disc">
              <li>Reactjs</li>
              <li>ReactDOM</li>
              <li>Parcel</li>
              <li>React Hooks</li>
              <li>JSX</li>
              <li>Swiggy API</li>
            </ul>
            <ul className="ml-4 space-y-1 list-disc">
              <li>React Router Dom</li>
              <li>React Context</li>
              <li>Redux Toolkit</li>
              <li>React Redux</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-36 py-12 h-[40rem] text-center">Data Not Found !</div>
  );
};

export default About;
