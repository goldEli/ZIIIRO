/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var hashHistory=require("react-router").hashHistory;
var Header=require('../../header/js/Header.js').Header;
require('../css/details.css');
var Details=React.createClass({
    getInitialState:function(){
        return({
            imgPath:null,
          dataDetails:[]
        })
    },
    add:function(){
        if(!this.props.location.query.uid){
            hashHistory.push("/login");
        }else{
            $.ajax({
                type:'post',
                url:'/cart/add',
                data:{
                    pid:this.props.location.query.id,
                    uid:this.props.location.query.uid
                },
                success:function(){
                    hashHistory.push('/details?uid='+this.props.location.query.uid+'$id='+this.props.location.query.id);
                }.bind(this)
            });
        }

    },
    componentWillMount:function(){
        $.ajax({
            type:'post',
            url:'/product/details',
            data:{
                id:this.props.location.query.id
            },
            success:function(data){
                $(this.refs.magnifyShow).css({
                    'background':'url("/pc/'+data[0].imgPathB+'") no-repeat'
                });
                this.setState({
                    imgPath:data[0].imgPathS[2],
                    dataDetails:data[0]
                });
            }.bind(this)
        });
    },
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
        var data=this.state.dataDetails;
        return(
            <div className="details">
                <Header/>
                <div className="product_details">
                    <div className="row row_border">
                        <div className="magnify_show" ref="magnifyShow"></div>
                        <div className="magnify_show1" ></div>
                        <div className="show_img fl">
                            <div className="imgDetails_box" ref="imgDetails_box">
                                <img src={this.state.imgPath} alt="img"/>
                                <div ref="magnifyArea" className="magnify_area"></div>
                            </div>
                        </div>
                        <div className="text_info fl">
                            <h1>{data.name}</h1>
                            <h4>{data.price}</h4>
                            <p>{data.info}</p>
                            <button onClick={this.add}>ADD TO CART</button>
                        <span>
                            SKU:Z0005WBBG
                        </span>
                        <span>
                            Category:<a href="javascript:">{data.category}</a>
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
                            <img src={data.imgUse} alt="img"/>
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