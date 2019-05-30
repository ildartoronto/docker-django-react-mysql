import React, { Component } from "react";

import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        age: "",
        gender: ""
      },
      genderOptions: ["Male", "Female", "Others"]
    };

    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      })
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      })
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      })
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    };

    try {
      fetch("http://localhost:8000/api/", options)
        .then(response => response.json())
        .then(data =>console.log(data));
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your name"}
          handleChange={this.handleInput}
        />{" "}

        <Input
          inputType={"number"}
          name={"age"}
          title={"Age"}
          value={this.state.newUser.age}
          placeholder={"Enter your age"}
          handleChange={this.handleAge}
        />{" "}

        <Select
          title={"Gender"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Select Gender"}
          handleChange={this.handleInput}
        />{" "}

        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}

      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
