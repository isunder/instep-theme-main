import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addcategory,
  removeFromCategory,
} from "../../../../../Redux/action/createNewCategoryAction";
import {
  Button,
  Col,
  Dropdown,
  Modal,
  Row,
  Spinner,
  Table,
} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { allCategoryList } from "../../../../../Redux/action/getCategoryAction";
import { toast } from "react-toastify";
import Allpagination from "../../../Pagination/pagination";
import Delete from "../../../deleteModel/delete";

const Allcategories = () => {
  const [selectedImagesforpost, setselectedImagesforpost] = useState();
  const [selectedImages, setSelectedImages] = useState([]);

  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state?.getcategorylistdata?.listdata?.data
  );
  console.log(data, "adat");

  const listCount = useSelector(
    (state) => state.getcategorylistdata?.listdata?.totalDocs
  );
  console.log(listCount, "Cddsdsd");

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  // const [readMoreState, setReadMoreState] = useState(null);

  const onSubmit = (values) => {
    var formData = new FormData();

    const payload = {
      category: values?.category,
      // images: selectedImagesforpost,
    };
    console.log(payload, "gggggggggggggggg");

    formData.append("images", selectedImagesforpost.file);
    formData.append("userData", JSON.stringify(payload));

    console.log(selectedImagesforpost, "fffff");
    console.log(JSON.parse(formData.getAll("userData")), "data");

    dispatch(addcategory(formData)).then((res) =>
      console.log(res, "Response from dispatch")
    );

    toast.success("Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const isLoading = useSelector(
    (state) => state?.getcategorylistdata?.isLoading
  );

  useEffect(() => {
    dispatch(allCategoryList({ page: currentPage, perPage: postPerPage }));
  }, [currentPage]);
  const handleImgeFile = (e) => {
    const files = e.target.files;
    const uniqueId = Date.now();
    let name = e.target.files[0].name;
    const filename = uniqueId + "_" + name;

    let file = new File(files, filename);
    setselectedImagesforpost({ file: file });
    // images  which is upoads
    let imagesArray = [];
    // Iterate through the selected files again to read and display them as previews
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
  const handleClose = () => setShow(false);

  const handleDelete = (id) => {
    dispatch(removeFromCategory({ categoryid: id })).then((res) => {
      if (res?.payload?.data?.success) {
        dispatch(allCategoryList({ page: currentPage, perPage: postPerPage }));
      }
      handleClose();
    });
  };

  const [show, setShow] = useState(false);
  const [categoryid, setCategoryid] = useState(null);
  const handleShow = (id) => {
    setCategoryid(id);
    setShow(true);
  };
  return (
    <>
      <Row>
        <div className="admin_toppadding ">
          <Col className="Admin_dashboard " lg={12}>
            <h3> Categories</h3>
          </Col>
        </div>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new margin_bottom">
            <div className="leftcategory_add">
              <Form
                onSubmit={onSubmit}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  valuess,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="category_item margin_bottom">
                      <Field
                        className="ctegorysearc_h"
                        name="category"
                        component="input"
                        type="text"
                        placeholder="category"
                        required
                      />
                      <div className="buttons"></div>
                    </div>
                    <div className="margin_bottom">
                      <h4>Upload image</h4>
                      <div>
                        <input
                          name="images"
                          type="file"
                          className="form-control signup_form_input margin_bottom"
                          onChange={handleImgeFile}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="buttons d-flex justify-content-end">
                        <button className="addcatsubit_button" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <div className="categoryadd_new">
            <Table responsive="md">
              <thead>
                <tr>
                  <th>S/L</th>
                  <th> Category Name</th>
                  <th className="d-flex justify-content-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <div className="table_Spinner">
                    <Spinner animation="border" variant="dark" />
                  </div>
                ) : (
                  data &&
                  data.map((e, index) => {
                    console.log(e, "fiorjei");
                    return (
                      <tr>
                        <td>{(currentPage - 1) * postPerPage + (index + 1)}</td>
                        <td>{e.category}</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <MdDelete
                              className="deleteicn_forpro"
                              onClick={() => {
                                handleShow(e?._id);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              <Allpagination
                currentPage={currentPage}
                postPerPage={postPerPage}
                setPostPerPage={setPostPerPage}
                setCurrentPage={setCurrentPage}
                listCount={listCount}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Delete
        handleDelete={handleDelete}
        handleClose={handleClose}
        show={show}
        categoryId={categoryid}
      />
    </>
  );
};

export default Allcategories;
