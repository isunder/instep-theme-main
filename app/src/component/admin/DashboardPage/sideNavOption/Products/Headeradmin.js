import React, { useEffect, useState } from "react";
import { Form, Field, useForm } from "react-final-form";
import {
  adminPostheading,
  admingetheading,
} from "../../../../../Redux/action/adminheader";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUserId } from "../../../../../utils/auth";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function Headeradmin() {
  const dispatch = useDispatch();

  const header = useSelector(
    (state) => state?.adminheading?.listdata?.data?.data
  );
  console.log(header, "header");
  useEffect(() => {
    dispatch(admingetheading({ adminID: "64b8ccde661f313c3be26a41" }));
  }, []);
  const [logoimage, setlogoimage] = useState([]);
  const [SelectedImages, setSelectedImages] = useState([]);
  const getadminid = getUserId();
  console.log(getadminid, "getadminid");
  const onSubmit = (values) => {
    console.log(values);

    const payload = {
      adminID: getadminid.id,
      heading: values?.heading,
      heading1: values?.heading1,
      Email: values?.Email,
      sitename: values?.sitename,
      logo: logoimage,
    };

    if (payload) {
      console.log(payload, "jsjs");

      const formData = new FormData();
      formData.append("adminData", JSON.stringify(payload));
      formData.append("logo", logoimage.file);

      if (formData) {
        dispatch(adminPostheading(formData)).then((res) => {
          console.log(res, "Sdsds");
          if (res?.payload?.data?.success == true) {
            toast.success("Successfully !", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setSelectedImages("");
            setlogoimage("");
          }
        });
      }
    }
  };

  const validate = (values) => {
    let error = {};

    if (!values.heading) {
      error.heading = "required";
    }
    if (!values.heading1) {
      error.heading1 = "required";
    }
    if (!values.Email) {
      error.Email = "required";
    }
    if (!values.sitename) {
      error.sitename = "required";
    }
    return error;
  };

  const handleImgeFile = (e) => {
    const files = e.target.files;
    const logo = e.target.files[0];
    if (!logo) {
      console.log("image is required");
      return false;
    }
    if (!logo.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      console.log("select valid image.");
      return false;
    }
    const uniqueId = Date.now();
    let name = e.target.files[0].name;

    const filename = uniqueId + "_" + name;

    let file = new File(files, filename);
    setlogoimage({ file: file });

    let imagesArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagesArray.push(event.target.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([imagesArray]);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  console.log(SelectedImages, logoimage, "teststts");
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="heading">
              {({ input, meta }) => (
                <div>
                  <label>heading </label>
                  <input {...input} type="text" placeholder="heading " />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="heading1">
              {({ input, meta }) => (
                <div>
                  <label> other heading </label>
                  <input {...input} type="text" placeholder="heading " />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="Email">
              {({ input, meta }) => (
                <div>
                  <label>Email </label>
                  <input {...input} type="text" placeholder="Email " />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <input
                name="images"
                type="file"
                className="form-control signup_form_input margin_bottom"
                onChange={handleImgeFile}
              />
              {SelectedImages?.length > 0 && (
                <div>
                  <h4>Selected logo:</h4>
                  <ul className="row">
                    {SelectedImages?.map((imageUrl, index) => (
                      <li key={index} className=" productupload_item col-md-3">
                        <img
                          className="productupload_image"
                          src={imageUrl}
                          alt={`Image ${index}`}
                        />
                        <p className="addimagecncel_icon"></p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Field name="sitename">
              {({ input, meta }) => (
                <div>
                  <label>sitename </label>
                  <input {...input} type="text" placeholder="sitename " />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div className="buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default Headeradmin;
