import React, {Component} from "react";
import {Col, Grid, PageHeader, Row} from "react-bootstrap";
import "./header.css";

export default class Header extends Component {

    render() {
        return (
            <div className="header">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} className="text-center">
                            <PageHeader>New York Times <br/>
                                <small>Search and Save your favorite News Articles</small>
                            </PageHeader>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}