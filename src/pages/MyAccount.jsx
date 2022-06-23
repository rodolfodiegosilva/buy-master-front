import React from 'react'
import Menu from '../components/Menu'
import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyAccount = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={12} >
                        <h1>Minha Conta</h1>
                    </Col>
                    <Col md={2} >
                        <Menu />
                    </Col>
                    <Col md={10} >
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MyAccount
