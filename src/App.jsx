import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppyList);

  function selectPuppy(id) {
    const puppy = puppies.find((p) => p.id === id);
    setFeatPupId(puppy);

    console.log("puppy id: ", puppy.id);
  }

  const $puppies = (
    <div className="puppies">
      {puppies.map((puppy) => (
        <p key={puppy.id} onClick={() => selectPuppy(puppy.id)}>
          {puppy.name}
        </p>
      ))}
    </div>
  );

  return (
    <>
      <h2>Puppies</h2>
      {$puppies}
    </>
  );
}

export default App;
