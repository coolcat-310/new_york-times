import React, {Component} from "react";
import Section from "../Template/sectionTemplate";
import {Button, Col, Panel} from "react-bootstrap";

export default class Result extends Component {

    renderResults = () => {
        let {articles} = this.props;

        return articles.map(item => {
            return (
                <Panel key={item._id}>
                    {item.headline.main}
                    <Button className="pull-right"
                            bsStyle="primary"
                            onClick={() => this.props.saveArticle(item)}
                    >Save</Button>
                </Panel>
            );

        })
    };

    render() {

        return (
            <div>
                <Section headerText="Result">
                    <Col xs={12} className="result-box">
                        {this.renderResults()}
                    </Col>

                </Section>


            </div>
        );
    }
}