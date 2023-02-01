import React, { Component } from "react";

import OneCheckbox from "../OneCheckbox/OneCheckbox";

class CheckboxForm extends Component {
  state = {
    checkboxes: this.props.interests.reduce(
      (emptyFirst, interest) => ({ ...emptyFirst, [interest]: false }),
      {}
    ),
  };

  submitHandle = (e) => {
    e.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter((one) => one)
      .forEach((one) => console.log(`Chosen interest: ${one}`));
  };

  changeHandle = (eChange) => {
    const { name } = eChange.target;
    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  createOne = (one) => {
    return (
      <OneCheckbox
        key={one}
        label={one}
        change={this.changeHandle}
        isSelected={this.state.checkboxes[one]}
      />
    );
  };

  chBoxesCreate = () => this.props.interests.map(this.createOne);

  render() {
    return (
      <form onSubmit={this.submitHandle}>
        <h2>Interests</h2>

        {this.chBoxesCreate()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default CheckboxForm;
