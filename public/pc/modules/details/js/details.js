/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var Details=React.createClass({
    render: function () {
        return(
            <div className="details">
                <div className="product_details">
                    <div className="row row_border">
                        <div className="show_img fl">
                            <img src="images/ziiiro-celeste-watch-black-mono-blue-side-200x300.jpg" alt="img"/>
                        </div>
                        <div className="text_info fl">
                            <h1>CELESTE Black / Mono</h1>
                            <h4>$ 199.00</h4>
                            <p>The design of Celeste is inspired by the Northern Lights, anyone who has experienced nature's most fascinating phenomenon never forgets it. Now, you get to experience the Aurora on your wrist, every day.</p>
                            <button>ADD TO CART</button>
                    <span>
                        SKU:Z0005WBBG
                    </span>
                    <span>
                        Category:<a href="javascript:">Celeste</a>
                    </span>
                    <span>
                        Tags:<a href="javascript:">black</a><a href="javascript:">blue</a><a href="javascript:">metal</a>
                    </span>
                        </div>
                    </div>
                    <p className="details_nav row">
                    <span>
                        <a className="details_nav_active" href="javascript:">DESCRIPTION</a>
                    </span>
                    <span>
                        <a href="javascript:">ADDITIONAL INFORMATION</a>
                    </span>
                    <span>
                        <a href="javascript:">REVIEWS</a>
                    </span>
                    <span>
                        <a href="javascript:">SHIPPING</a>
                    </span>
                    </p>
                    <div className="row product_features">
                        <fieldset>
                            <legend>PRODUCT FEATURES</legend>
                        </fieldset>
                        <div className="row">
                            <div className="product_features_cell fl">
                                <img src="images/icon-exchangeable.jpg" alt="img"/>
                                <h3>INTERCHANGEABILITY</h3>
                                <p>Please note that the ZIIIRO Mercury, Celeste, Saturn  Titan watch series are NOT interchangeable with other watches.</p>
                            </div>
                            <div className="product_features_cell fl">
                                <img src="images/icon-wrist.jpg" alt="img"/>
                                <h3>WRIST SIZE</h3>
                                <p>The metal straps of watch models ZIIIRO Mercury, Celeste and Saturn are made to fit a wrist size of about 13.00 cm – 21.00 cm. The size can be easily changed in seconds using a flat screwdriver. See Support page for how to do it.</p>
                            </div>
                            <div className="product_features_cell fl">
                                <img src="images/icon-water.jpg" alt="img"/>
                                <h3>WATER RESISTANCE</h3>
                                <p>Water Resistant 3 ATM or 30 m. Suitable for everyday use. Splash/rain resistant. NOT suitable for showering, bathing, swimming, snorkelling, water related work and fishing. If you don’t take your watch for a swim, you should be fine.</p>
                            </div>
                        </div>
                        <fieldset>
                            <legend>HOW TO READ THE TIME</legend>
                        </fieldset>
                        <div className="useMethod row">
                            <img src="images/Howto_Celeste.jpg" alt="img"/>
                        </div>
                        <fieldset>
                            <legend>BOOKLET and CATALOGS</legend>
                        </fieldset>
                        <div className="row booklet">
                            <a href="javascript:"></a>
                            <h2>Head over to Issuu to browse and download our <a href="javascript:">Booklets and Catalogs</a>.</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
exports.Details=Details;