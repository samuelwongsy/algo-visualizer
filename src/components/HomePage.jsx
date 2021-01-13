import React from "react";
import PathFindingVisualizer from "./PathFindingVisualizer/PathFindingVisualizer";
import NavigationBar from "./NavigationBar";
import SmallScreenContainerText from "./PathFindingVisualizer/SmallScreenContainerText";
import { Container, Grid } from "semantic-ui-react";

export default function HomePage() {
  return (
    <div>
      <Grid divided='vertically' style={{height: '100vh', backgroundColor: "rgb(32,32,32)"}}>
        <Grid.Row style={{height: '7%'}}>
          <NavigationBar />
        </Grid.Row>
        <Grid.Row only="large screen widescreen" style={{height: '100%', backgroundColor: "rgb(32,32,32)"}}>
          <PathFindingVisualizer />
        </Grid.Row>
      </Grid>
    </div>
  );
}
