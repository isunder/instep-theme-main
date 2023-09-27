import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  BsFillBagFill,
  BsFillGiftFill,
  BsQuestionCircleFill,
  BsStarHalf,
} from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MainFooter() {
  return (
    <div className="container-fluid huuuuuuuuuuuuuu">
      <Row>
        <footer>
          <div className="top">
            <ul>
              <h5>ABOUT</h5>
              <li>
                <a href="dgg">Contact Us</a>
              </li>
              <li>
                <Link  reloadDocument to="aboutus">About Us</Link>
              </li>
              <li>
                <a href="dg">Careers</a>
              </li>
              <li>
                <a href="dg">Press</a>
              </li>
            </ul>
            <ul>
              <h5>HELP</h5>
              <li>
                <Link reloadDocument to="/paymentdetail">Payments</Link>
              </li>
              <li>
                <Link reloadDocument to="/shippingdetail">Shipping</Link>
              </li>
              <li>
                <a href="dg">Cancellation & Return</a>
              </li>
              <li>
                <a href="dg">FAQ</a>
              </li>
              <li>
                <a href="dg">Report Infringment</a>
              </li>
            </ul>
            <ul>
              <h5>CONSUMER POLICY</h5>
              <li>
                <a href="dg">Return Policy</a>
              </li>
              <li>
                <Link reloadDocument to="/termofuse">Terms Of Use</Link>
              </li>
              <li>
                <Link reloadDocument to="/paymentsecurity">Security</Link>
              </li>
              <li>
                <Link reloadDocument to="/privacypolicy">Privacy</Link>
              </li>
              <li>
                <a href="dg">Sitemap</a>
              </li>
              <li>
                <a href="dg">Grievance Redressal</a>
              </li>
              <li>
                <a href="dg">EPR Compliance</a>
              </li>
            </ul>
            <ul>
              <h5>SOCIAL</h5>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
            <ul className="left_border">
              <h5 className="text"> Mail Us:</h5>
              <p>
                mailto:instepcart@mail.com <br />
              </p>
            </ul>
            <ul>
              <h5> Registered Office Address:</h5>
              <p>
                {" "}
                Tricity Plaza, Office No. 14
                <br />
                Ground, Peer Muchalla <br />
                Zirakpur, Punjab 140603
              </p>
              <p className="tele">
                Telephone: <span>000-000-0000</span>{" "}
              </p>
            </ul>
          </div>
          <Row>
            <Col className="social">
              <i>
                {" "}
                <BsFillBagFill className="Soc_icon" />
                Become a Seller
              </i>
              <i>
                {" "}
                <BsStarHalf className="Soc_icon" />
                Advertise
              </i>
              <i>
                {" "}
                <BsFillGiftFill className="Soc_icon" />
                Gift Cards
              </i>
              <i>
                <BsQuestionCircleFill className="Soc_icon" />
                Help Center
              </i>
              <i> &copy; 2023 Instepcart.com</i>
            </Col>
          </Row>
          {/* <div className="info">
      <div className="legal">
        <a href="dg">Terms & Conditions</a><a href="dg">Privacy Policy</a>
      </div>
      <div className="copyright">2021 Copyright &copy; Sean B</div>
    </div> */}
        </footer>
      </Row>
    </div>
  );
}
