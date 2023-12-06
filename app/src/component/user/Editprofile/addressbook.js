import React, { useEffect, useState } from 'react'
import { deliveryGetAction, deliveryaddress } from '../../../Redux/action/deliveryAddress';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../../utils/auth';
import { Col, Row } from 'react-bootstrap';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Form, Field } from "react-final-form";
import RadioInput from '../placeOrder/radioButton';


const AddressBook = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const dispatch = useDispatch()
  const userLogin = getUserId();
  const dataId = userLogin.id;
  const addressdata = useSelector((state) => state?.deliveryaddressget?.listdata?.data
  );
  console.log(addressdata, "hfhdujfffrcsdc")
  useEffect(() => {
    dispatch(
      deliveryGetAction({
        userID: dataId,
      })
    )
  }, [dataId]);


  const handleSubmit = (values) => {
    values.userID = dataId;

    dispatch(deliveryaddress(values)).then((res) => {
      if (res) {
        dispatch(deliveryGetAction(values));
      }
    });
    console.log(values, "values");
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
  return (
    <>
      <div>
        <h3>Manage Addresses</h3>
        <Row>
          <Col>
            <div
              className="addnew_address"
              onClick={() => setFormVisible(!isFormVisible)}
            >
              <div>
                <BsPlusCircleFill className="logindetail_icon" />
              </div>
              <div>
                <p>Add New</p>
              </div>
            </div>
          </Col>
        </Row>
        {isFormVisible && (
          <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({
              handleSubmit,
              form,
              submitting,
              pristine,
              values,
            }) => (
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
                  value="use my current location"
                  className="addresslocation"
                >
                  SAVE
                </button>

              </form>
            )}
          />
        )}

        {addressdata &&
          addressdata?.map((e) => {
            console.log(e, "mnsdnsfnsj");
            return (
              <>
                <div className="d-flex mb-3 ">
                  <div className="fdsfdsf">

                  </div>
                  <div>
                    <div className="selectadressdetail">
                      <p>{e.name}</p>
                      <div>{e.addresstype}</div>
                      <p>{e.mobilenumber}</p>
                    </div>
                    <div className="bottomdivaddress">
                      <p>{e.address}</p>
                      <p>{e.pincode}</p>,<p>{e.landmark}</p>,
                      <p>{e.Locality}</p>
                      <p>{e.state}</p>,
                    </div>

                  </div>
                </div>

              </>
            );
          })}


      </div>
    </>
  )
}

export default AddressBook
