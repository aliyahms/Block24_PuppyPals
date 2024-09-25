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

  const $featPupId = featPupId && (
    <section className="featuredPuppy">
      <h2>{featPupId.name}</h2>
      <dl>
        <div>
          <dt>Age</dt>
          <dd>{featPupId.age}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{featPupId.email}</dd>
        </div>
      </dl>
    </section>
  );

  return (
    <>
      <h1>Puppies</h1>
      {$puppies}
      {$featPupId}
    </>
  );
}

export default App;
