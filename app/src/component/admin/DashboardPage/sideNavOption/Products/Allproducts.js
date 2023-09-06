import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Pagination, Table } from "react-bootstrap";
import { LuEdit3 } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  initializeUseSelector,
  useSelector,
} from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
// import ConfirmationModal from "../../../admin/confirmModel";
import { toast, ToastContainer } from "react-toastify";
import MydModalWithGrid from "../../../addProductDetails/updateProductForm";
import ConfirmationModal from "../../../addProductDetails/confirmModel";
import { updateProduct } from "../../../../../Redux/action/updateProductAction";
import { allAdminProductList } from "../../../../../Redux/action/getAllProductListing";
import { deleteProduct } from "../../../../../Redux/action/deleteProductAction";

function Allproducts(params) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [show, setShow] = useState(false);
  const data = useSelector(
    (state) => state?.GetAdminProductAllListData?.listdata
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAdminProductList());
  }, []);
  const handleProduct = () => {
    navigate("/product");
  };

  const deleteClick = (_id) => {
    setSelectedProductId(_id);
    setShowModal(true);
  };

  const handleDeleteConfirmation = () => {
    setShowModal(false);
    toast.error("Delete Successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });

    dispatch(deleteProduct({ _id: selectedProductId })).then((res) => {
      console.log(res?.meta?.requestStatus);
      if (res?.meta?.requestStatus === "fulfilled") {
        dispatch(allAdminProductList());
      } else {
        window.alert("Product deletion failed.");
      }
    });
  };
  const editClick = (_id, values) => {
    dispatch(updateProduct({ _id: _id }));
    setShow(true);
    console.log("wwww");
  };
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="admin_toppadding ">
        <Row>
          <Col className="Admin_dashboard margin_bottom" lg={12}>
            <h3> Products</h3>
            <div>
              <Button
                className="Admin_rbutton"
                variant="secondary"
                onClick={handleProduct}
              >
                <AiOutlinePlus className="Admin_icons" />
                Add Product
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className="searchbutton">
            <div className="form_control_or_btngroup">
              <div className="all_product_search location_search">
                <FiSearch className="allproduct_searchicon " />{" "}
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2 adminsearch_bar"
                />
              </div>
              <div className="btngroup">
                <Dropdown>
                  <Dropdown.Toggle
                    className="select_button"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Select Brand
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    className="select_button"
                    variant="success"
                    id="dropdown-basic"
                  >
                    Select Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button className="select_button " type="submit">
                  {" "}
                  <AiOutlineSearch /> search
                </Button>
              </div>
            </div>
            <Table responsive="md">
              <thead>
                <tr>
                  <th>S/L</th>
                  <th>Product Name</th>
                  <th>Brand</th>
                  <th>Categories</th>
                  <th>Price</th>
                  <th>Published</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data?.map((product, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td></td>
                          <td>{product.title}</td>
                          <td>{product.category}</td>
                          <td>{product.subcategory}</td>
                          <td>{product.price}</td>
                          <td>{product.brand}</td>
                          <td>
                            {" "}
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                <BiDotsVerticalRounded />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                  {" "}
                                  <button
                                    className="editdeleter_button"
                                    onClick={() => editClick(product._id)}
                                  >
                                    <LuEdit3 /> Edit
                                  </button>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                  <button
                                    className="editdeleter_button"
                                    onClick={() => deleteClick(product._id)}
                                  >
                                    {" "}
                                    <AiOutlineDelete /> delete
                                  </button>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </Table>
            <div className="table_pageination">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item disabled>{5}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Col>
        </Row>
        <MydModalWithGrid show={show} handleClose={handleClose} />
        <ConfirmationModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onConfirm={handleDeleteConfirmation}
        />
        <ToastContainer />
      </div>
    </>
  );
}
export default Allproducts;
