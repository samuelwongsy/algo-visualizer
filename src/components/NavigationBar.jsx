import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react";

function NavigationBar(props) {
  const { algoString, handleSelection } = props;

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" href="https://www.github.com/samuelwongsy" header>
            <Image
              size="mini"
              src={require("../images/snowflake.svg")}
              style={{ marginRight: "1.5em" }}
            />
            Algorithm Visualizer
          </Menu.Item>
          <Menu.Item as="a" href="/">
            Home
          </Menu.Item>

          <Dropdown item simple text="Pathfinding Visualizer">
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
              {/* <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>Visualizing: {algoString}</Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}

export default NavigationBar;
