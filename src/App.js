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
                //onChange={}
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
                  //onClick={}
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
                  //onClick={}
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
                          // onClick={
                          //   }
                        >
                          Edit
                        </Button>

                        <Button
                          variant="danger"
                         // onClick={}
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