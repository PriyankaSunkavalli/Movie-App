import React from "react";
import { useEffect } from "react";

const Apiurl = "http://www.omdbapi.com/?apikey=2ac059dc";
const App = () => {
  const SearchMovies = async (title) => {
    const response = await fetch(`${Apiurl}&s=${title}`);
    const data = await response.json();
    // fetch(`${Apiurl}&s=${title}`)
    // .then(response=>response.json())
    // .then(data=>)
    console.log(data);
  };

  useEffect(() => {}, []);
  return <h1>App</h1>;
};
export default App;
