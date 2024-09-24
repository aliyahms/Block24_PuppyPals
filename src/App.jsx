import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  console.log(puppyList);

  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
