import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
    return (
        <>
            <Navbar  bg="white" style={{
                margin: "10px 10px",
                padding:"0px"
            }}>
                

                <Navbar.Brand href="#home"
                    style={{
                        background: "black",
                        color: "white",
                        padding: "25px",
                        fontSize: "35px",
                        letterSpacing: "15px",
                        marginLeft:"-15px",
                        width:"340px",
                        textAlign:"center"
                    }}>FLAIR</Navbar.Brand>
                <Nav className="ms-auto"
                    style={{
                        background: "white",
                    }}>

                    <Nav.Link
                       className="dot" href="#home"></Nav.Link>
                    <Nav.Link
                        style={{
                            // fontSize: "20px",
                            color: "grey",
                            padding: "0px 10px",
                        }} href="#home">Liam o'relly</Nav.Link>

                </Nav>

            </Navbar>

          
        </>
    )
}

export default Navbars