import React, { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Field, Form } from "react-final-form";

const Editprofile = () => {
    const onSubmit = () => { };

    const initialValues = () => {

    }

    const validate = (values) => {
        let errors = {}

        return errors
    }

    return (
        <>
            <Container>
                <div className="slider_col">
                    <Row>
                        <Form
                            onSubmit={onSubmit}
                            initialValues={useMemo((e) => initialValues(e), [])}
                            validate={validate}
                            render={({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <Col md={12}>
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <div>
                                                        <label>a</label>
                                                    </div>
                                                    <input className="my-2" {...input} placeholder=""/>
                                                </>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col md={12}>
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <div>
                                                        <label>a</label>
                                                    </div>
                                                    <input className="my-2" {...input} />
                                                </>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col md={12}>
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <div>
                                                        <label>a</label>
                                                    </div>
                                                    <input className="my-2" {...input} />
                                                </>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col md={12}>
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <div>
                                                        <label>a</label>
                                                    </div>
                                                    <input className="my-2" {...input} />
                                                </>
                                            )}
                                        </Field>
                                    </Col>
                                    <Col md={12}>
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <div>
                                                        <label>a</label>
                                                    </div>
                                                    <input className="my-2" {...input} />
                                                </>
                                            )}
                                        </Field>
                                    </Col>
                                </form>
                            )}
                        />
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Editprofile;
