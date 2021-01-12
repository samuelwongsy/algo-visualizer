import React from "react";
import PathFindingVisualizer from "./PathFindingVisualizer/PathFindingVisualizer";
import NavigationBar from "./NavigationBar";
import { Container, Grid } from "semantic-ui-react";

export default function HomePage() {
  return (
    <div>
      <Grid divided='vertically' style={{height: '100vh'}}>
        <Grid.Row style={{height: '5%'}}>
          <NavigationBar />
        </Grid.Row>
        <Grid.Row style={{height: '90%'}}>
          <PathFindingVisualizer />
        </Grid.Row>
      </Grid>
    </div>
  );
}
