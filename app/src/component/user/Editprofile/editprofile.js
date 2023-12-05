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
            <div className="editprofile_main">

                <Row>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={useMemo((e) => initialValues(e), [])}
                        validate={validate}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Col md={12}>
                                    <div className="labelalig_n margin_bottom">
                                        <h3> Personal Information</h3>
                                        <div>Edit</div>
                                    </div>

                                    <div className="info-fields margin_bottom mb-4" >
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>

                                                    <input className="firstname" {...input} placeholder="first name" />
                                                </>
                                            )}
                                        </Field>
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <input className="lastname" {...input} placeholder="last name" />
                                                </>
                                            )}
                                        </Field>
                                        <div><button className="personalinfo_button" type="submit">Save</button></div>
                                    </div>
                                </Col>

                                <Col md={12}>
                                    <div className="labelalig_n">
                                        <h5>Email Address</h5> <div>Edit</div>
                                    </div>
                                    <div className="margin_bottom personalotherinput">
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <input className="otherinputalign" {...input} placeholder="Email Address" />
                                                </>
                                            )}
                                        </Field>
                                        <div><button className="personalinfo_button" type="submit">Save</button></div>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="labelalig_n">
                                        <h5>Mobile Number</h5><div>Edit</div>
                                    </div>
                                    <div className="margin_bottom personalotherinput">
                                        <Field name="">
                                            {({ input, meta }) => (
                                                <>
                                                    <input className="otherinputalign" {...input} placeholder="Mobile Number" />
                                                </>
                                            )}
                                        </Field>
                                        <div><button className="personalinfo_button" type="submit">Save</button></div>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="labelalig_n">
                                        <h5>Profile Image</h5> <div>Edit</div>
                                    </div>
                                    <div className="personalotherinput ">

                                        <input className="form-control signup_form_input margin_bottom  w-50" type="file" />

                                        <div><button className="personalinfo_button" type="submit">Upload</button></div>
                                    </div>
                                </Col>
                            </form>
                        )}
                    />
                </Row>
                <div className="Deactivate-account">Deactivate Account</div>
            </div>

        </>
    );
};

export default Editprofile;
