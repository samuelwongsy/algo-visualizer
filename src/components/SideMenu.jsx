import React, { Component } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";

export default class SideMenu extends Component {
  state = { activeItem: "Breadth First Search" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.handleSelection(name);
  };

  render() {
    const { activeItem } = this.state;
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
              name="A-star Search"
              active={activeItem === "A-star Search"}
              onClick={this.handleItemClick}
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
            onClick={clearGrid}
          >
            Clear
            <Icon name="redo alternate" />
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}
