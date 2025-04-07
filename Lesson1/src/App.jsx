import React from "react";
import Cart from "./components/bai1/Cart";
import PostsTable from "./components/bai2/PostsTable";
import ToggleSwitch from "./components/bai3/ToggleSwitch";

function App() {
  return (
    <div>
      <h1>Bai 1</h1>
      <Cart />
      <h1>Bai 2</h1>
      <PostsTable /> 
      <h1>bai 3</h1>
      <ToggleSwitch />

    </div>
  );
}

export default App;