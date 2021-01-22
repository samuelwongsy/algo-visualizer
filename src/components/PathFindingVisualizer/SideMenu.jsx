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
    if (this.props.mazeFlag || !this.props.clearFlag) return;
    this.setState({ activeWall: name });
    this.props.handleWallGeneration(name);
  }

  clearGrid = (e) => {
    this.setState({ activeWall: "Default" });
    this.props.clearGrid();
  }

  render() {
    const { activeItem, activeWall } = this.state;
    const { visualizeAlgorithm, clearGrid, animateFlag, clearFlag } = this.props;

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
            <Menu.Item 
              name="Randomized Prim's Algorithm"
              active={activeWall === "Randomized Prim's Algorithm"}
              onClick={this.handleWallAlgoClick}
            />
          </Menu.Menu>
        </Menu.Item>
        
        <Menu.Item>
          <Button
            fluid
            secondary
            icon
            labelPosition="right"
            onClick={visualizeAlgorithm}
            disabled={animateFlag || (!animateFlag && !clearFlag)}
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
            disabled={animateFlag}
          >
            Clear
            <Icon name="redo alternate" />
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}
