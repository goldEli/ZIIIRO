/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var Details=React.createClass({
    componentDidMount:function(){
        $(function(){
            var magnifyArea=this.refs.magnifyArea;
            $(this.refs.imgDetails_box).mouseenter(function(){
                $(magnifyArea).css({display:'block'});
                $(this.refs.magnifyShow).css({'display':'block'});
            }.bind(this));
            $(this.refs.imgDetails_box).mousemove(function(){
                $(magnifyArea).css({
                    top:getPoints(event).y,
                    left:getPoints(event).x
                });
                if($(magnifyArea).position().left<0){
                    $(magnifyArea).css({left:'0'});
                }
                if($(magnifyArea).position().left/100>'1'){
                    $(magnifyArea).css({left:'1rem'});
                }
                if($(magnifyArea).position().top<0){
                    $(magnifyArea).css({top:'0'});
                }
                if($(magnifyArea).position().top/100>'1.5'){
                    $(magnifyArea).css({top:'1.5rem'});
                }
                //放大后显示
                var showX=$(magnifyArea).position().left/100/2*5.1;
                var showY=$(magnifyArea).position().top/100/3*6.5;
                $(this.refs.magnifyShow).css({'background-position':'-'+showX+'rem -'+showY+'rem'});

            }.bind(this));
            $(this.refs.imgDetails_box).mouseleave(function(){
                $(magnifyArea).css({display:'none'});
                $(this.refs.magnifyShow).css({'display':'none'});
            }.bind(this));
            function getPoints(event){
                return({
                    x:(event.pageX-318)/91-0.5+'rem',
                    y:(event.pageY-153)/91-0.5+'rem'
                })
            }
        }.bind(this));
    },
    render: function () {
        return(
            <div className="details">
                <div className="product_details">
                    <div className="row row_border">
                        <div className="magnify_show" ref="magnifyShow"></div>
                        <div className="magnify_show1" ></div>
                        <div className="show_img fl">
                            <div className="imgDetails_box" ref="imgDetails_box">
                                <img src="images/ziiiro-celeste-watch-black-mono-blue-side-510x650.jpg" alt="img"/>
                                <div ref="magnifyArea" className="magnify_area"></div>
                            </div>
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