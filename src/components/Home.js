import React from "react";
import { name, city } from "../data/data.js";
const homeStyle = {
  color:'firebrick'
}
function Home(props) {
  // update the JSX being returned!
  return <div id="home">
    <h1 style= {homeStyle}> {name} is a Web Developer from {city}</h1>
    Home</div>;
}

export default Home;
