import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Modal, Row } from "react-bootstrap";
// import Subcaregoryfilter from "./SubcaregoryMobilefilter";
// import SubCategoryfilter from "./subCategoryfilter";
import { BsFillHeartFill } from "react-icons/bs";
import Spinner from "../loader/spinner";
import {
  wishlistget,
  wishlistremove,
} from "../../../Redux/action/wishlistAction";
import { getUserId } from "../../../utils/auth";
import { MdDelete } from "react-icons/md";

const Wishlistinform = () => {
  const dispatch = useDispatch();
  const userData = getUserId();

  console.log(userData, "userData");

  const datas = useSelector(
    (state) => state?.getwishlisdData?.listdata?.data?.data
  );
  console.log(datas, "dadadadada");

  const handleWishlistClick = (wishlistId) => {
    console.log(wishlistId, "sdfghjk");
    if (wishlistId) {
      //Delete API
      dispatch(wishlistremove({ tableid: wishlistId }));
    }
  };

  useEffect(
    (e) => {
      dispatch(wishlistget({ userId: userData?.id }));
    },
    [""]
  );

  const handleRemoveAddress = (e) => {

  }

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="container slider_col">
        <Row>
          {datas &&
            datas?.map((item) => {
              return (
                <>
                  <div className="subcatkitechenmaindiv row margin_bottom">

                    <Col lg={3} md={4} sm={4}>
                      <Link
                        className="carddecorationnone_cat text_edit"
                        reloadDocumen={true}
                        to={`/productdetail/${item?.products[0]?._id}`}
                      >
                        <div className="d-flex justify-content-end mt-2 mx-2">
                          <BsFillHeartFill
                            style={{ color: "#FF0000" }}
                            onClick={() => handleWishlistClick(item?._id)}
                          />
                        </div>
                        <div>
                          <img
                            className="wishimage"
                            variant="top"
                            // src={item?.image || item?.thumbnail}
                            src={
                              item.products[0]?.image
                                ? item.products[0]?.image
                                : item.products[0]?.thumbnail?.split(":")
                                  ?.length > 1
                                  ? item.products[0]?.thumbnail
                                  : `http://localhost:5000/uploads/${item?.products[0]?.thumbnail}`
                            }
                            alt=""
                          />
                        </div>
                      </Link>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                      <Link
                        className="carddecorationnone_cat text_edit"
                        reloadDocumen={true}
                        to={`/productdetail/${item?.products[0]?._id}`}
                      >
                        <div className="p-4">
                          <div className="subcatitem_cont">
                            {" "}
                            {item?.products[0]?.title}aaaaaaa
                          </div>
                          <div className="descripmob">
                            {" "}
                            {item?.products[0]?.description}
                          </div>
                          <div className="kit_homestarticon">
                            {item?.products[0]?.rating}
                          </div>
                        </div>
                      </Link>
                    </Col>
                    <Col lg={1} md={2} sm={2}>
                      <div className="p-4">
                        <h5> ₹{item?.products[0]?.price}</h5>
                      </div>
                    </Col>
                    <Col lg={2} md={2} sm={2}>
                      <div className="p-4 d-flex align-items-center justify-content-center">
                        <MdDelete
                          className="deleteicn_forpro"
                          onClick={() => handleShow()}
                        />
                      </div>
                    </Col>
                  </div>
                </>
              );
            })}
        </Row>
        <Modal
          className="removerfromcart_modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to Delete this item
            ?
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="cancelbut_removecart"
              variant="secondary"
              onClick={handleClose}
            >
              CANCEL
            </Button>
            <Button
              className="removebut_cart"
              variant="primary"
              onClick={() => handleRemoveAddress()}
            >
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Wishlistinform;
