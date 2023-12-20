import React, { useEffect, useMemo, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Field, Form } from "react-final-form";
// import { createprofile } from "../../../Redux/action/profileaction";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../../../utils/auth";
import { getProductAction } from "../../../Redux/action/getProductDetailAction";
import { singleproduct } from "../../../Redux/action/getsingleProduct";
import { createprofile } from "../../../Redux/action/profileaction";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../loader/spinner";

const Editprofile = () => {
  const dispatch = useDispatch();
  const [profileimgdata, setProfileimgData] = useState("");
  const [selectedthumbnalFile, setselectedthumbnalFile] = useState([]);
  
  const profiledata = useSelector((state) => state?.profileslice?.listdata?.data?.data);
  // const etstadta = useSe
  const loading = useSelector((state) => state?.profileslice?.isLoading);
  console.log(profiledata, "aaaaaaaaaaaaaaaaaaaa");
  const [edit, setEdit] = useState(false);

  // const token = getToken();
  // const tokenD = JSON.parse(token);

  const dataId = getUserId();
  const midata = { id: dataId?.id };
  console.log(midata, "dataId");
  const onSubmit = (values) => {
    console.log(values, "jdhdbuscdskjvcs");
    var formData = new FormData();
  };
  // console.log("userData ab", userData);
  useEffect(() => { }, [""]);

  const handleEdit = (name) => {
    setEdit(name);
  };
  const handleSave = (values) => {
    var formData = new FormData();
    if (values?.id) {
      formData.append("userData", JSON.stringify(values));
      dispatch(createprofile(formData)).then((res) => {
        console.log(res, "fwoemkf");
        toast.success("Successfully Edit !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
    }
    setEdit(false);
  };

  const validate = (values) => {
    let errors = {};

    return errors;
  };

  const initialValues = () => {
    let init = {
      firstname: profiledata?.firstname,
      lastname: profiledata?.lastname,
      // number: profiledata?.number,
      number: profiledata?.number,
      profileimg: profileimgdata,
      email: profiledata?.email,
      id: profiledata?._id,
    };

    return init;
  };
  useEffect(() => {
    var formData = new FormData();
    // Dispatch action to create profile with headers
    if (dataId?.id) {
      const userData = { id: dataId?.id };
      formData.append("userData", JSON.stringify(userData));
      dispatch(createprofile(formData)).then((res)=>{
        console.log(res,'fwuioel')
      });
    }
    // formData.append("image", selectedthumbnalFile);
  }, [""]);

  return (
    <>
      {loading && <Spinner />}
      <>
        <div className="editprofile_main">
          <Row>
            <Form
              onSubmit={onSubmit}
              initialValues={useMemo(() => initialValues(), [profiledata])}
              validate={validate}
              render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit}>
                  <Col md={12}>
                    <div className="labelalig_n margin_bottom">
                      <h3> Personal Information</h3>
                      {edit !== "name" ? (
                        <div
                          onClick={() => {
                            handleEdit("name");
                          }}
                        >
                          Edit
                        </div>
                      ) : (
                        <p
                          className="editfrpf_cancel"
                          onClick={() => setEdit(false)}
                        >
                          Cancel
                        </p>
                      )}
                    </div>

                    <div className="info-fields margin_bottom mb-4">
                      <Field name="firstname">
                        {({ input, meta }) => (
                          <>
                            <input
                              disabled={edit !== "name"}
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
                              disabled={edit !== "name"}
                              className="lastname"
                              {...input}
                              placeholder="last name"
                            />
                          </>
                        )}
                      </Field>
                      <div>
                        {edit === "name" && (
                          <button
                            onClick={() => {
                              handleSave({
                                firstname: values.firstname,
                                lastname: values.lastname,
                                id: values?.id,
                              });
                            }}
                            className="personalinfo_button"
                            type="submit"
                          >
                            Save
                          </button>
                        )}
                      </div>
                      <ToastContainer />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="labelalig_n">
                      <h5>Email Address</h5>
                      {/* <div>Edit</div> */}
                    </div>
                    <div className="margin_bottom personalotherinput">
                      <Field name="email">
                        {({ input, meta }) => (
                          <>
                            <input
                              className="otherinputalign"
                              disabled="true"
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
                      {edit !== "number" ? (
                        <div onClick={() => handleEdit("number")}>Edit</div>
                      ) : (
                        <p
                          className="editfrpf_cancel"
                          onClick={() => setEdit(false)}
                        >
                          cancel
                        </p>
                      )}
                    </div>
                    <div className="margin_bottom personalotherinput">
                      <Field name="number">
                        {({ input, meta }) => (
                          <>
                            <input
                              disabled={edit !== "number"}
                              className="otherinputalign"
                              {...input}
                              placeholder="Mobile Number"
                            />
                          </>
                        )}
                      </Field>
                      <div>
                        {edit === "number" && (
                          <button
                            className="personalinfo_button"
                            onClick={() => {
                              handleSave({
                                number: values.number,
                                id: values?.id,
                              });
                            }}
                          >
                            Save
                          </button>
                        )}
                      </div>
                    </div>
                  </Col>
                  {/* <Col md={12}>
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
                </Col> */}
                </form>
              )}
            />
          </Row>
          <div className="Deactivate-account">Deactivate Account</div>
        </div>
      </>
    </>
  );
};

export default Editprofile;
