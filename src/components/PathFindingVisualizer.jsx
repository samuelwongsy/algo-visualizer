import React, { useState } from "react";
import PathFindingGrid from "./PathFindingGrid";
import SideMenu from "./SideMenu";
import { Container, Grid } from "semantic-ui-react";

function PathFindingVisualizer() {
  const [algoString, setAlgoString] = useState("Breadth First Search");

  const handleSelection = newAlgoString => {
    setAlgoString(newAlgoString);
    console.log(newAlgoString);
  };

  return (
    <div>
      <Grid verticalAlign="middle" stackable>
        <Grid.Column width={2}>
          <Container fluid>
            <SideMenu handleSelection={handleSelection} />
          </Container>
        </Grid.Column>
        <Grid.Column width={12}>
          <PathFindingGrid algoString={algoString} />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default PathFindingVisualizer;
