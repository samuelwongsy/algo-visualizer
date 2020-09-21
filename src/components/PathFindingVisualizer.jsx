import React, { useState } from "react";
import Grid from "./Grid";
import NavigationBar from "./NavigationBar";

function PathFindingVisualizer() {
  const [algoString, setAlgoString] = useState("bfs");

  const handleSelection = newAlgoString => {
    setAlgoString(newAlgoString);
    console.log(newAlgoString);
  };

  return (
    <div>
      <NavigationBar
        handleSelection={handleSelection}
        algoString={algoString}
      />
      <Grid algoString={algoString} />
    </div>
  );
}

export default PathFindingVisualizer;
