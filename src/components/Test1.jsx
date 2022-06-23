
import React from 'react'
import { useState, useContext, useEffect } from "react";
import UserDataContext from "../context/userData";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./test1.css"

const Test1 = (props) => {
  const { userData } = useContext(UserDataContext);
  console.log(userData);

  return (
    <>
      {!userData ? '' :
        <Container>
          <Row>
            <Col md={8} >
              <div className='user-data'>
                <h3>Dados Pessoais</h3>
                <input value={userData.userData.firstName}></input>
                <input value={userData.userData.maidenName}></input>
                <input value={userData.userData.lastName}></input>
                <input value={userData.userData.phone}></input></div>
            </Col>
            <Col md={4} >
              <img src={userData.userData.image}/>
            </Col>
          </Row>
        </Container>}
    </>
  );
}

export default Test1
