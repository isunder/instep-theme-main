import React, { useEffect, useMemo, useState } from 'react'
import { deleteAddress, deliveryGetAction, deliveryaddress, updateAddress } from '../../../Redux/action/deliveryAddress';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../../utils/auth';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Form, Field } from "react-final-form";
import RadioInput from '../placeOrder/radioButton';
import { LuEdit3 } from 'react-icons/lu';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';


const AddressBook = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch()

  const userLogin = getUserId();

  const dataId = userLogin.id;

  const addressdata = useSelector((state) => state?.deliveryaddressget?.listdata?.data
  );
  const [editAddressIndex, setEditAddressIndex] = useState(null)


  const addressEditData = useSelector((state) => state?.updateProductData)

  useEffect(() => {
    dispatch(
      deliveryGetAction({
        userID: dataId,
      })
    )
  }, [dataId]);

  const handleRemoveAddress = (_id) => {
    dispatch(deleteAddress({ tableid: _id })).then((res) => {
      if (res?.payload?.success) {
        dispatch(deliveryGetAction({ "userID": dataId }))
      }
    })
  }

  const handleSubmit = (values, form) => {
    console.log(values, "handel")
    values.userID = dataId;
    if (editAddressIndex) {
      console.log(values, "in if ")
      //update
      dispatch(updateAddress(values)).then((res) => {
        if (res) {
          dispatch(deliveryGetAction(values));
          form.reset();
        }
      })
      setEditAddressIndex(null)
    } else {
      //add
      dispatch(deliveryaddress(values)).then((res) => {
        if (res) {
          setFormVisible(false,)
          dispatch(deliveryGetAction(values));
          form.reset();
        }
      });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "Required";
    }
    if (!values.pincode) {
      errors.pincode = "Required";
    }
    if (!values.Locality) {
      errors.Locality = "Required";
    }
    if (!values.addresstype) {
      errors.addresstype = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.state) {
      errors.state = "Required";

      if (!values.landmark) {
        errors.landmark = "Required";
      }
      if (!values.AlternateNumber) {
        errors.AlternateNumber = "Required";
      }
    }
    return errors;
  };

  const init = (e) => {
    let initialValues = {}
    if (editAddressIndex) {
      console.log(addressdata[editAddressIndex - 1], 'testinit')
      initialValues.name = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].name
      initialValues.mobilenumber = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].mobilenumber
      initialValues.pincode = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].pincode
      initialValues.Locality = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].Locality
      initialValues.address = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].address
      initialValues.state = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].state
      initialValues.landmark = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].landmark
      initialValues.AlternateNumber = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1].AlternateNumber
      initialValues.tableid = addressdata[editAddressIndex - 1] && addressdata[editAddressIndex - 1]._id
    } else {
      initialValues = ("")
    }
    return initialValues;
  }

  return (
    <>
      <div>
        <h3>Manage Addresses</h3>
        <Row>
          <Col lg={10}>
            {!editAddressIndex &&
              <div
                className="addnew_address margin_bottom"
                onClick={() => {
                  setEditAddressIndex(null)
                  setFormVisible(!isFormVisible)
                }}
              >
                <div>
                  <BsPlusCircleFill className="logindetail_icon" />
                </div>
                <div>
                  <p>Add New</p>
                </div>
              </div>}
            <Form
              onSubmit={handleSubmit}
              // validate={validate}
              initialValues={useMemo((e) => init(e), [editAddressIndex])}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <>
                  {(isFormVisible || editAddressIndex) && (
                    <form onSubmit={handleSubmit}>
                      <div className="adsressmaindiv_top margin_bottom">
                        <Field name="name">
                          {({ input, meta }) => (
                            <div className="fields">
                              <input
                                {...input}
                                type="text"
                                placeholder="Name"
                                className="inputfiels_place"
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="mobilenumber">
                          {({ input, meta }) => (
                            <div className="fields">
                              <input
                                {...input}
                                type="number"
                                placeholder="10-digit mobile number"
                                className="inputfiels_place"
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="adsressmaindiv_top margin_bottom">
                        <Field name="pincode">
                          {({ input, meta }) => (
                            <div className="fields">
                              <input
                                {...input}
                                type="number"
                                placeholder="pincode"
                                className="inputfiels_place"
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="Locality">
                          {({ input, meta }) => (
                            <div className="fields">
                              <input
                                {...input}
                                type="text"
                                placeholder="locality"
                                className="inputfiels_place"
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <Field name="address">
                        {({ input, meta }) => (
                          <div className="addressbottommain margin_bottom">
                            <input
                              {...input}
                              type="text"
                              placeholder="address"
                              className="addressmaininput"
                            />
                            {meta.error && meta.touched && (
                              <span>{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      <div className="adsressmaindiv_top margin_bottom">
                        <Field name="state">
                          {({ input, meta }) => (
                            <div className="fields">
                              <input
                                {...input}
                                type="text"
                                placeholder="City/District/Town"
                                className="inputfiels_place"
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="adsressmaindiv_top margin_bottom">
                        <Field name="landmark">
                          {({ input, meta }) => (
                            <div className="fields">
                              <input
                                {...input}
                                type="text"
                                placeholder="landmark"
                                className="inputfiels_place"
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="AlternateNumber">
                          {({ input, meta }) => (
                            <div className="fields">
                              <input
                                {...input}
                                type="number"
                                placeholder="Alternate phone (optinal)"
                                className="inputfiels_place"
                              />
                              {meta.error && meta.touched && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      <p>Address Type</p>
                      <div className="delivery_place margin_bottom">

                        <div className="form-check">
                          <Field
                            name="addresstype"
                            type="radio"
                            value="Home"
                            id="flexRadioDefault1"
                            component={RadioInput}
                            label="Home (All day delivery)"
                          />
                        </div>
                        <div className="form-check">
                          <Field
                            name="addresstype"
                            type="radio"
                            value="Work"
                            id="flexRadioDefault2"
                            component={RadioInput}
                            label="Work (Delivery between 10 AM-5 PM)"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        // value="use my current location"
                        className="addresslocation margin_bottom"
                      >
                        {editAddressIndex ? "UPDATE" : "SAVE"}
                      </button>
                    </form>
                  )}
                </>

              )}
            />
            <Row>
              {addressdata &&
                addressdata?.map((e, index) => {
                  console.log(e, "mnsdnsfnsj");
                  return (
                    <>
                      <Col lg={12}>
                        <div className="mb-3 getaddressdetal">
                          <div>
                            <div className="selectadressdetail">
                              <p>{e.name}</p>
                              <div>{e.addresstype}</div>
                            </div>
                            <div> <p>{e.mobilenumber}</p></div>
                            <div className="bottomdivaddress">
                              <p>{e.address}</p>
                              <p>{e.pincode}</p>,<p>{e.landmark}</p>,
                              <p>{e.Locality}</p>
                              <p>{e.state}</p>
                            </div>
                          </div>
                          <div>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant=""
                                id="dropdown-basic"
                              >
                                <BiDotsVerticalRounded />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  <button
                                    className="editdeleter_button"
                                    onClick={() => {
                                      setEditAddressIndex(index + 1)
                                    }}
                                  >
                                    <LuEdit3 /> Edit
                                  </button>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <button
                                    className="editdeleter_button"
                                    onClick={() => handleRemoveAddress(e._id)}
                                  >
                                    <AiOutlineDelete /> delete
                                  </button>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>

                      </Col >
                    </>
                  );
                })}
            </Row>
          </Col>
        </Row >
      </div>
    </>
  )
}

export default AddressBook
