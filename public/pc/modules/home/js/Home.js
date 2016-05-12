/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Home=React.createClass({
    render:function(){
        return (
            <div className="home">
                <div className="banner">
                    <div className="banner_box">
                        <img src="images/banner-eon.jpg" alt="banner"/>
                        <div className="banner_info">
                            <h1>EON</h1>
                            <h4>New! 3 Colors,<br/>interchangable with<br/>tansparent bracelet</h4>
                            <a href="javascript:">SHOP NOW</a>
                        </div>
                    </div>
                    <div className="banner_btn">
                        <div className="banner_btn_left">
                            <a href="javascript:"><span>&lt;</span></a>
                        </div>
                        <div className="banner_btn_right">
                            <a href="javascript:"><span>&gt;</span></a>
                        </div>
                    </div>
                    <ol className="banner_pageDots">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li className="isSelected"></li>
                    </ol>
                </div>
                <div className="show_product">
                    <h1>Unique. Minimal. Aesthetic.</h1>
                    <h3>ZIIIRO watches are designed to make time for fun. Futuristic, minimalist, bold. Every design embodies the ZIIIRO vision of creating incredible timepieces with unique appearance and style. These space-age timekeepers remind us to zig while the world zags, and to take all the time we need to live and enjoy a life that¡¯s awesome.</h3>
                    <div className="show_product_box">
                        <div className="show_product_box_cell fl">
                            <div className="img_box">
                                <img className="show" src="images/ziiiro-celeste-watch-black-mono-front-200x300.jpg" alt="img"/>
                                <img className="hide" src="images/ziiiro-celeste-watch-black-mono-blue-side-200x300.jpg" alt="img"/>
                                <div className="cart_icon fr">
                                    <strong>+</strong>
                                    <span className="cart_icon_handle"></span>
                                </div>
                            </div>
                            <div className="text_box">
                                <h5>CELESTE</h5>
                                <p>CELESTE Black/Mono</p>
                                <span>$199.00</span>
                            </div>
                        </div>
                        <div className="show_product_box_cell fl">
                            <div className="img_box">
                                <img className="show" src="images/ziiiro-celeste-watch-black-mono-front-200x300.jpg" alt="img"/>
                                <img className="hide" src="images/ziiiro-celeste-watch-black-mono-blue-side-200x300.jpg" alt="img"/>
                                <div className="cart_icon fr">
                                    <strong>+</strong>
                                    <span className="cart_icon_handle"></span>
                                </div>
                            </div>
                            <div className="text_box">
                                <h5>CELESTE</h5>
                                <p>CELESTE Black/Mono</p>
                                <span>$199.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="customer_care">
                    <fieldset>
                        <legend>CUSTOMER CARE</legend>
                    </fieldset>
                    <div className="customer_care_grid">
                        <div className="customer_care_cell fl">
                            <img src="images/star.png" alt="img"/>
                            <h4>FREE INTERNATIONAL SHIPPING</h4>
                            <p>Get Free International Standard Shipping on all orders over US$145. Enjoy Free Shipping for all watches purchased from our online shop. Items are dispatched from our Hong Kong logistics warehouse.</p>
                        </div>
                        <div className="customer_care_cell fl">
                            <img src="images/star.png" alt="img"/>
                            <h4>OUR DELIVERY PROMISE</h4>
                            <p>To deliver on our promise of exceedingly personal service and ensure prompt delivery of your fabulous order, we guarantee to process all in stock items and make every attempt to ship out your package within 2-3 business days from our warehouse.</p>
                        </div>
                        <div className="customer_care_cell fl">
                            <img src="images/star.png" alt="img"/>
                            <h4>AMAZING CUSTOMER SERVICE</h4>
                            <p>We are committed to providing all customers with superior customer experience. If for any reason something goes wrong, we will work to resolve the issue quickly and as professionally as we can.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
exports.Home=Home;