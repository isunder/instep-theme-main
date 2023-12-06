import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Field, Form } from "react-final-form";
// import { createprofile } from "../../../Redux/action/profileaction";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../../utils/auth";
import { getProductAction } from "../../../Redux/action/getProductDetailAction";
import { singleproduct } from "../../../Redux/action/getsingleProduct";
import { createprofile } from "../../../Redux/action/profileaction";

const Editprofile = () => {
  const dispatch = useDispatch();
  const [profileimgdata, setProfileimgData] = useState();
  const [selectedthumbnalFile, setselectedthumbnalFile] = useState([]);
  const profiledata = useSelector(
    (state) => state?.profileslice?.listdata?.data?.data
  );
  console.log(profiledata, "aaaaaaaaaaaaaaaaaaaa");
  // const token = getToken();
  // const tokenD = JSON.parse(token);

  const dataId = getUserId();
  const midata = { id: dataId?.id };
  console.log(midata, "dataId");
  const onSubmit = (values) => {
    console.log(values, "jdhdbuscdskjvcs");
    var formData = new FormData();
    // const dataId = getUserId();
    // const midata = dataId?.id;
    // console.log(midata, "dataId");
    // const payload = {
    //   id: midata,
    // };
    // formData.append("thumbnail", selectedthumbnalFile);
    // dispatch(createprofile(payload));
    // console.log(values, "64f9a6880987b0e93df57c14");
  };
  // console.log("userData ab", userData);
  useEffect(() => {
    var formData = new FormData();
    // Dispatch action to create profile with headers
    if (dataId?.id) {
      const userData = { id: dataId?.id };
      formData.append("userData", JSON.stringify(userData));
      dispatch(createprofile(formData));
    }
    formData.append("image", selectedthumbnalFile);
  }, [""]);

  // useEffect(() => {
  //   const dataId = getUserId();
  //   const midata = dataId?.id;
  //   console.log(midata, "dataId");

  //   const payload = {
  //     id: "6544d134cb73734355c65ec4",
  //   };
  //   dispatch(singleproduct(payload));
  // }, [dispatch]);
  // const profildata = useSelector((state) => state?.profileslice);
  // console.log(profildata, "profildata");

  //   useEffect(() => {
  //     dispatch(createprofile());
  //   }, [""]);

  const validate = (values) => {
    let errors = {};

    return errors;
  };

  const initialValues = {
    firstname: profiledata?.firstname,
    lastname: profiledata?.lastname,
    number: profiledata?.number,
    number: profiledata?.number,
    profileimg: profileimgdata,
    email: profiledata?.email,
  };
  // const onSubmit = () => { };

  // const initialValues = () => {};

  // const validate = (values) => {
  //     let errors = {}

  //     return errors
  // }

  return (
    <>
      <div className="editprofile_main">
        <Row>
          <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Col md={12}>
                  <div className="labelalig_n margin_bottom">
                    <h3> Personal Information</h3>
                    <div>Edit</div>
                  </div>

                  <div className="info-fields margin_bottom mb-4">
                    <Field name="firstname">
                      {({ input, meta }) => (
                        <>
                          <input
                            className="firstname"
                            {...input}
                            placeholder="first name"
                          />
                        </>
                      )}
                    </Field>
                    <Field name="lastname">
                      {({ input, meta }) => (
                        <>
                          <input
                            className="lastname"
                            {...input}
                            placeholder="last name"
                          />
                        </>
                      )}
                    </Field>
                    <div>
                      <button className="personalinfo_button" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                </Col>

                <Col md={12}>
                  <div className="labelalig_n">
                    <h5>Email Address</h5> <div>Edit</div>
                  </div>
                  <div className="margin_bottom personalotherinput">
                    <Field name="email">
                      {({ input, meta }) => (
                        <>
                          <input
                            className="otherinputalign"
                            {...input}
                            placeholder="Email Address"
                          />
                        </>
                      )}
                    </Field>
                    {/* <div>
                      <button className="personalinfo_button" type="submit">
                        Save
                      </button>
                    </div> */}
                  </div>
                </Col>
                <Col md={12}>
                  <div className="labelalig_n">
                    <h5>Mobile Number</h5>
                    <div>Edit</div>
                  </div>
                  <div className="margin_bottom personalotherinput">
                    <Field name="number">
                      {({ input, meta }) => (
                        <>
                          <input
                            className="otherinputalign"
                            {...input}
                            placeholder="Mobile Number"
                          />
                        </>
                      )}
                    </Field>
                    <div>
                      <button className="personalinfo_button" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="labelalig_n">
                    <h5>Profile Image</h5> <div>Edit</div>
                  </div>
                  <div className="personalotherinput ">
                    <input
                      name="profileimg"
                      className="form-control signup_form_input margin_bottom  w-50"
                      type="file"
                    />

                    <div>
                      <button className="personalinfo_button" type="submit">
                        Upload
                      </button>
                    </div>
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
