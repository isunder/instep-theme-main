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
        <Row>
          {item.map((item) => {
            return (
              <>
                <Col>
                  <Link to={`/productdetail/${item._id}`}>
                    <Card className="shopping_card">
                      <div className="img_div">
                        <Card.Img
                          variant="top"
                          src={item?.image || item?.thumbnail}
                        />
                      </div>
                      Zara
                      <Card.Body>
                        <div className="item_rating">
                          <p className="homerating_cat"> {item?.rating}</p>
                          <p className="homerating_cat"> {item.category}</p>
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
      </Container>
    </>
  );
}

export default Searchproduct;
