import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);

    // Setting initial state
    this.state = {
      userInput: "",
      list: [],
    };
  }

  //  user input value
  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  // Add item
  add() {
    if (this.state.userInput !== "") {
      const userInput = {
        // Add a random id to delete
        id: Math.random(),
        // user intput value added to list
        value: this.state.userInput,
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({ list, userInput: "" });
    } else {
      alert("Enter some item name");
    }
  }

  //function to delete an item based on id
  delete(key) {
    const list = [...this.state.list];

    const updateList = list.filter((item) => item.id !== key);

    this.setState({ list: updateList });
  }

  //function to delete all items
  alldelete() {
    if (this.state.list.length === 0) {
      alert("List is already empty");
    } else {
      this.setState({
        list: [],
      });
    }
  }

  //function to edit an item based on id
  edit = (index) => {
    let todos = [...this.state.list];
    let currentTodo = todos[index].value;
    let editedTodo = prompt("Edit the List:", currentTodo);
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;
      this.setState({
        list: updatedTodos,
      });
    }
  };

  render() {
    return (
      <Container>
        <Row
          style={{
            display: "flex",
            fontSize: "2.5rem",
            fontWeight: "bolder",
            fontFamily: "Arial",
            color: "black",
            justifyContent: "center",
            //justifyContent: "left",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          TO-DO List
        </Row>
        <br />
        <br />
        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Add item"
                size="lg"
                value={this.state.userInput}
                onChange={(item) => this.updateInput(item.target.value)}
              />
            </InputGroup>

            <Row
              style={{
                marginBottom: "1rem",
              }}
            >
              <Col>
                <Button
                  variant="primary"
                  className="mt-2"
                  onClick={() => this.add()}
                  style={{
                    // display: "flex",
                    fontSize: "1rem",
                    // justifyContent: "flex-start",
                    // marginLeft: "1px",
                  }}
                >
                  ADD ITEM
                </Button>
              </Col>

              <Col
                style={{
                  display: "flex",
                  fontSize: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="danger"
                  className="mt-2"
                  onClick={() => this.alldelete()}
                  style={{
                    fontSize: "1rem",
                    // justifyContent: "flex-end",
                  }}
                >
                  DELETE ALL
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {this.state.list.map((item, index) => {
                return (
                  <div key={index}>
                    <ListGroup.Item
                      variant="light"
                      action
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {item.value}
                      <span>
                        <Button
                          variant="success"
                          style={{ marginRight: "12px" }}
                          onClick={
                            () => this.edit(index)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="danger"
                          onClick={() => this.delete(item.id)}
                        >
                          Delete
                        </Button>
                      </span>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
