import React from "react";
import PathFindingVisualizer from "./PathFindingVisualizer";
import NavigationBar from "./NavigationBar";

export default function HomePage() {
  return (
    <div>
      <NavigationBar />
      <PathFindingVisualizer />
    </div>
  );
}
