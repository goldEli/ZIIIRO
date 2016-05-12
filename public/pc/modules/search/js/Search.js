/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var Search=React.createClass({
    render:function(){
        return(
            <div className="search">
                <div className="search_input">
                    <div className="search_input_area fr">
                        <button>search</button>
                        <input type="text"/>
                    </div>
                    <p>Showing all 66 results</p>
                </div>
                <div className="side_nav fl">
                    <h1>WATCH MODELS</h1>
                    <a href="javascript:"><p>AURORA</p></a>
                    <a href="javascript:"><p>CELESTE</p></a>
                    <a href="javascript:"><p>ECLIPSE</p></a>
                    <a href="javascript:"><p>EON</p></a>
                    <a href="javascript:"><p>GRAVITY</p></a>
                    <a href="javascript:"><p>ION</p></a>
                    <a href="javascript:"><p>MERCURY</p></a>
                    <a href="javascript:"><p>ORBIT</p></a>
                    <a href="javascript:"><p>PROTON</p></a>
                    <a href="javascript:"><p>SATURN</p></a>
                    <a href="javascript:"><p>STRAPS</p></a>
                    <a href="javascript:"><p>TITAN</p></a>
                    <a href="javascript:"><p>VALENTINES BUNDLES</p></a>
                </div>
                <div className="show_result fl">
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
        )
    }
});
exports.Search=Search;