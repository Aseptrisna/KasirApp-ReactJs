// import { Row} from 'react-bootstrap';

import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Hasil, NavbarComponent, ListCategoriest,Menus} from "./component";
import { Api_Url } from "./Utils/constans";
import axios from "axios";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }
  componentDidMount() {
    axios.get(Api_Url+"products").then((res) => {
      const menus = res.data;
      this.setState({ menus });
    })
    .catch(error =>{
      console.log(error)
    })
  }

  render() {
    console.log(this.state.menus)
    const {menus}=this.state
    return (
      <div>
        <div className="App">
          <NavbarComponent />
          <div className="mt-3">
            <Container fluid>
              <Row>
                <ListCategoriest />
                <Col md={6} xs={4} className="mb-4">
                  <h4>
                    <strong>Daftar Product</strong>
                  </h4>
                  <hr />
                  {menus && menus.map((menu)=>(
                   <Menus
                   key={menu.id}
                   menu={menu}/>
                    ))}
                </Col>
                <Hasil />
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
