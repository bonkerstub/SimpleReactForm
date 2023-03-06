import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

console.log(fruits);

const fullName = {
  fName: "James",
  lname: "Bond"
};

const user = {
  fullName,
  id: 1,
  username: "jamesBond007"
};

console.log(user);
