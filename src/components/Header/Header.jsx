import React, { Component } from "react";

class Header extends Component {
  state = {
    fruits: "jjghgy",
  };

  mouseEnterHandle = (frs) => {
    let array = Object.keys(frs);
    let string = array.join(" ");

    this.setState({ fruits: string });
  };

  render() {
    return (
      <header
        onMouseOver={() => {
          this.mouseEnterHandle(this.props.fruits);
        }}
      >
        Cart:
        <ul>{this.state.fruits}</ul>
      </header>
    );
  }
}

export default Header;
