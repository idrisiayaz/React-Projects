import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map( cardEntry => 
      <Entry
      key={cardEntry.id}
      id={cardEntry.id}
      name={cardEntry.name}
      emoji={cardEntry.emoji}
      meaning={cardEntry.meaning}
    />)}</dl>
    </div>
  );
}

export default App;
