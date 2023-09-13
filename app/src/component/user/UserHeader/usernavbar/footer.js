import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsFillBagFill, BsFillGiftFill, BsQuestionCircleFill, BsStarHalf } from 'react-icons/bs'

export default function Footer() {
  return (
    <div className="container-fluid">
    <Row>
      <footer>
        <div className="top">
          <ul>
            <h5>ABOUT</h5>
            <li>
              <a href="dgg">Contact Us</a>
            </li>
            <li>
              <a href="dgg">About Us</a>
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
              <a href="dg">Payments</a>
            </li>
            <li>
              <a href="dg">Shipping</a>
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
              <a href="dg">Terms Of Use</a>
            </li>
            <li>
              <a href="dg">Security</a>
            </li>
            <li>
              <a href="dg">Privacy</a>
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
  )
}
