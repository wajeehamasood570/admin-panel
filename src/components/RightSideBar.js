import React from 'react'
import { Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css'
import Tables from './Tables';


const RightSideBar = () => {
    return (
        <>
            <div className="rightwidth"
            >
                <Col sm={12}
                    className=" mb-2"
                    style={{
                        background: "white",
                        height: "10vh",
                    }}>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: "20px"
                    }}>
                        <div
                            style={{
                                padding: "25px 10px auto 0px",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                marginLeft: "5px"

                            }}>Authentication Search</div>
                        <div
                            style={{
                                padding: "25px 0px",
                                fontSize: "25px",
                                display: "flex",
                                alignItems: "center"


                            }}>
                            <Form className="d-flex" style={{
                                width: "100%",
                                position: "relative"
                            }}>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"

                                />
                                <i class="fa fa-search icon"></i>
                            </Form>
                            <Button variant="dark">Search</Button>
                        </div>
                    </div>
                </Col>

                <Tables />

            </div>
        </>
    )
}

export default RightSideBar