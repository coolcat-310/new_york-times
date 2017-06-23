import React, {Component} from "react";
import Section from "../Template/sectionTemplate";
import {Button, Col, FormControl, FormGroup, HelpBlock} from "react-bootstrap";
import "./section.css";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            term2: "",
            term3: ""
        }
    }

    handleChange = (event) => {
        this.setState({term: event.target.value});

    };
    handleChange2 = (event) => {
        this.setState({term2: event.target.value});

    };
    handleChange3 = (event) => {
        this.setState({term3: event.target.value});

    };

    getValidationState() {
        const length = this.state.term.length;
        if (length >= 3) return 'success';
        else if (length < 3) return 'error';
    }

    getValidationStateYearBegin() {

        const length = this.state.term2.length;
        if (length === 4 && this.state.term2.match(/^\d+$/)) return 'success';
        else if (length < 3) return 'error';
        else if (length > 4) return 'error';
    }

    getValidationStateYearEnd() {

        const length = this.state.term3.length;
        if (length === 4 && this.state.term3.match(/^\d+$/)) return 'success';
        else if (length < 3) return 'error';
        else if (length > 4) return 'error';
    }


    render() {

        return (
            <div>
                <Section className='header' headerText="Search">
                    <Col xs={12}>
                        <form >
                            <FormGroup controlId="formBasicText"
                                       validationState={this.getValidationState()}
                            >
                                <div className="text-center"><h4>Topic</h4></div>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter Subject"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Input must be at least 3 characters long.</HelpBlock>
                            </FormGroup>

                            <FormGroup controlId="formBasicText"
                                       validationState={this.getValidationStateYearBegin()}>
                                <div className="text-center"><h4>Start Year</h4></div>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter Start Year"
                                    onChange={this.handleChange2}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Enter Year (YYYY)</HelpBlock>
                            </FormGroup>

                            <FormGroup controlId="formBasicText"
                                       validationState={this.getValidationStateYearEnd()}>
                                <div className="text-center"><h4>End Year</h4></div>
                                <FormControl
                                    type="text"
                                    value={this.state.value}
                                    placeholder="Enter End Year"
                                    onChange={this.handleChange3}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Enter Year (YYYY)</HelpBlock>
                            </FormGroup>
                            <br/>
                            <div className="text-center">
                                <Button bsStyle="primary"
                                        onClick={() => this.props.fetchArticles(this.state.term, this.state.term2, this.state.term3)}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Col>
                </Section>
            </div>
        );
    }
}