import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Searchproduct() {
  const item = useSelector((state) => state?.Searchproduct?.listdata);
  console.log(item, "item");
  return (
    <>
      <Container>
        <div className=" slider_col ">
          <Row>
            {item.map((item) => {
              return (
                <>
                  <Col lg={3}>
                    <Link
                      className="card_deco"
                      to={`/productdetail/${item._id}`}
                    >
                      <Card className="shopping_card forcatcards_htwd">
                        <div className="img_div">
                          <Card.Img
                            variant="top"
                            src={
                              item?.image
                                ? item?.image
                                : item?.thumbnail.split(":").length > 1
                                ? item?.thumbnail
                                : `http://localhost:5000/uploads/${item.thumbnail}`
                            }
                          />
                        </div>
                        <Card.Body>
                          <div className="item_rating">
                            {/* <p className="homerating_cat"> {item?.rating}</p> */}
                            {/* <p className="homerating_cat"> {item.category.category}</p> */}
                          </div>
                          <Card.Title className="crad_text">
                            {item.title}
                          </Card.Title>
                          <Card.Text className="crad_text">
                            {item?.description}
                          </Card.Text>
                          <Card.Text className="crad_text">
                            <h5> ₹ {item?.price}</h5>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Searchproduct;
