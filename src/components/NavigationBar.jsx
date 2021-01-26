import React from "react";
import {
  Container,
  Image,
  Menu,
} from "semantic-ui-react";

function NavigationBar(props) {
  // const { algoString, handleSelection } = props;

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" href="https://samuelwongsy.me" header>
            <Image
              size="mini"
              src={require("../images/snowflake.svg")}
              style={{ marginRight: "1.5em" }}
            />
            Samuel Wong
          </Menu.Item>
          <Menu.Item as="a" href="/algo-visualizer">
            Algorithm Visualizer
          </Menu.Item>

          {/* <Dropdown item simple text="Pathfinding Visualizer">
            <Dropdown.Menu>
              <Dropdown.Header>Algorithms</Dropdown.Header>
              <Dropdown.Item
                value="bfs"
                onClick={(e, d) => handleSelection(d.value)}
              >
                Breadth First Search
              </Dropdown.Item>
              <Dropdown.Item
                value="a-star"
                onClick={(e, d) => handleSelection(d.value)}
              >
                A* Search
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>Visualizing: {algoString}</Menu.Item> */}
        </Container>
      </Menu>
    </div>
  );
}

export default NavigationBar;
