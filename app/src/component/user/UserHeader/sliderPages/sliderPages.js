import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SliderPages = () => {
    return (
        <>
            <Container fluid>
                <div className="slider_col ">
                    <div className='silderSale'>
                        <div>Big Sale</div>
                    </div>
                    <Row>
                        <Col>
                            <div className='static_image margin_bottom'>
                                <img src='https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2017/12/31/27443-sale-discount-pixabay.jpg?itok=F5N8dl5d' alt='' />
                            </div>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col>
                                <div className='dealscategory'>
                                    <div><h3>Deals</h3></div>
                                    <div><h3>From Our Categories</h3></div>
                                    <div className='static_image margin_bottom'>
                                        <img src='https://t3.ftcdn.net/jpg/02/37/43/52/360_F_237435208_lAF8SgGPX9Ya9BUlIcIHXtcJbEzvSwn3.jpg' alt='' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className='margin_bottom'>
                        <Row>
                            <Col lg={3}>
                                <div className='fourcolumnbacground'>
                                    <div className='foursalecolumn'>
                                        <div>
                                            <img src='https://th.bing.com/th/id/OIG.hSKc.XhLnL7SPxOdkRsU' alt='' />
                                        </div>
                                        <div>
                                            <p>Shoes and more</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='fourcolumnbacground'>
                                    <div className='foursalecolumn'>
                                        <div>
                                            <img src='https://th.bing.com/th/id/OIG.hSKc.XhLnL7SPxOdkRsU' alt='' />
                                        </div>
                                        <div>
                                            <p>Shoes and more</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='fourcolumnbacground'>
                                    <div className='foursalecolumn'>
                                        <div>
                                            <img src='https://th.bing.com/th/id/OIG.hSKc.XhLnL7SPxOdkRsU' alt='' />
                                        </div>
                                        <div>
                                            <p>Shoes and more</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='fourcolumnbacground'>
                                    <div className='foursalecolumn'>
                                        <div>
                                            <img src='https://th.bing.com/th/id/OIG.hSKc.XhLnL7SPxOdkRsU' alt='' />
                                        </div>
                                        <div>
                                            <p>Shoes and more</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SliderPages
