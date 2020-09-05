import React, { useState, useEffect } from "react";
import Node from "./Node";

function Grid() {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push([]);
      }
      setNodes(prevArray => [...prevArray, currentRow]);
    }
  }, []);

  return (
    <div>
      {nodes.map((row, rowIndex) => {
        return (
          <div>
            {row.map((node, colIndex) => (
              <Node />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
