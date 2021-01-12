import React, { Component } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";

export default class SideMenu extends Component {
  state = { 
    activeItem: "Breadth First Search",
    activeWall: "Default"
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.handleSelection(name);
  };

  handleWallAlgoClick = (e, { name }) => {
    this.setState({ activeWall: name });
    this.props.handleWallGeneration(name);
  }

  clearGrid = (e) => {
    this.setState({ activeWall: "Default" });
    this.props.clearGrid();
  }

  render() {
    const { activeItem, activeWall } = this.state;
    const { visualizeAlgorithm, clearGrid } = this.props;

    return (
      <Menu fluid inverted vertical size="large">
        <Menu.Item>
          Algorithms
          <Menu.Menu>
            <Menu.Item
              name="Breadth First Search"
              active={activeItem === "Breadth First Search"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Depth First Search"
              active={activeItem === "Depth First Search"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="A-star Search"
              active={activeItem === "A-star Search"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="A-star Search Min Heap"
              active={activeItem === "A-star Search Min Heap"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          Wall Generation
          <Menu.Menu>
            <Menu.Item 
              name="Recursive Division"
              active={activeWall === "Recursive Division"}
              onClick={this.handleWallAlgoClick}
            />
            <Menu.Item 
              name="Binary Tree Maze"
              active={activeWall === "Binary Tree Maze"}
              onClick={this.handleWallAlgoClick}
            />
            <Menu.Item 
              name="Depth First Search Maze"
              active={activeWall === "Depth First Search Maze"}
              onClick={this.handleWallAlgoClick}
            />
          </Menu.Menu>
        </Menu.Item>

        {/* <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        /> */}
        <Menu.Item>
          <Button
            fluid
            secondary
            icon
            labelPosition="right"
            onClick={visualizeAlgorithm}
          >
            Visualize
            <Icon name="caret square right" />
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button
            fluid
            secondary
            icon
            labelPosition="right"
            onClick={this.clearGrid}
          >
            Clear
            <Icon name="redo alternate" />
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}
