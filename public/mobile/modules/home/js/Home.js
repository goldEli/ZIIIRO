/**
 * Created by Administrator on 2016/5/13.
 */
var React=require('react');
var Link=require('react-router').Link;
var Header=require('../../header/js/Header.js').Header;
var HomeHotItem=require('./HomeHotItem').HomeHotItem;
var Home=React.createClass({
    getInitialState:function(){
      return(
        {
            dataHot:[],
            uid:null
        }
      )
    },
    componentWillMount:function(){
        //获取热销商品
        $.ajax({
            type:'post',
            url:'/hot/showAllProduct',
            success:function(data){
                this.setState({dataHot:data});
            }.bind(this)
        });
    },
    componentDidMount:function(){
        //保存用户ID
        this.setState({uid:this.props.location.query.uid});
        var arr=[this.refs.banner_box,this.refs.banner_box1,this.
            refs.banner_box2,this.refs.banner_box3,
            this.refs.banner_box4];
        var index=0;
        var timer;
        var dots;
        //向右或者向左轮播
        $(this.refs.leftBtn).click(function(){
            stopMove();
            moveImage(false);
            startMove();
        });
        $(this.refs.rightBtn).click(function(){
            stopMove();
            moveImage(true);
            startMove();
        });
        //轮播圆点按钮isSelected
        var str=[];
        for(var i=0;i<arr.length;++i){
            str+='<li></li>';
        }
        $(this.refs.banner_pageDots).html(str);
        dots=$(this.refs.banner_pageDots).find('li');
        $(dots[0]).attr('class','isSelected');
        $(dots).click(function(){
            stopMove();
            $(dots).attr('class','');
            $(this).attr('class','isSelected');
            $(arr).css({'left':'-7.02rem'});
            $(arr[$(this).index()]).css({'left':0});
            index=$(this).index();
            startMove();
        });
        //自动向右播放图片
        startMove();
        function startMove(){
            timer=setInterval(function(){
                moveImage(true)
            },3000);
        }
        //停止动画
        function stopMove(){
            clearInterval(timer);
            $(arr).finish();
        }
        function moveImage(direction){
            var d=direction ? 1 : -1;
            for(var i=0;i<arr.length;++i){
                if($(arr[i]).position().left==0){
                    $(arr[i]).animate({left:7.02*d+'rem'});
                }
            }
            if(direction){
                ++index;
                if(index==arr.length){
                    index=0;
                }
            }  else{
                --index;
                if(index==-1){
                    index=arr.length-1;
                }
            }
            $(arr[index]).css({left:-7.02*d+'rem'});
            $(arr[index]).animate({
                left:0
            });
            $(dots).attr('class','');
            $(dots[index]).attr('class','isSelected');
        }
    },
    render:function(){
        console.info(this.state.uid);
        if(this.state.dataHot){
            var arr=[];
            arr=this.state.dataHot.map(function(element){
                arr=element;
                return <HomeHotItem uid={this.state.uid} dataHot={arr}/>
            }.bind(this));
        }
        return(
            <div className="home">
                <Header uid={this.state.uid}/>
                <div className="banner">
                    <div className="banner_box" ref="banner_box">
                        <img src="images/banner-eon.jpg" alt="banner"/>
                        <div className="banner_info">
                            <h1>EON</h1>
                            <h4>New! 3 Colors,<br/>interchangable with<br/>tansparent bracelet</h4>
                            <a href="javascript:">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="banner_box1" ref="banner_box1">
                        <img src="images/banner-orbit.jpg" alt="banner"/>
                        <div className="banner_info1">
                            <h1>ORBIT</h1>
                            <h4>Available in 4 colors</h4>
                            <a href="javascript:">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="banner_box2" ref="banner_box2">
                        <img src="images/banner-eclipse-steel.jpg" alt="banner"/>
                        <div className="banner_info2">
                            <h1>ECLIPSE STEEL</h1>
                            <h4>illuminated by Super-Luminova</h4>
                            <a href="javascript:">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="banner_box3" ref="banner_box3">
                        <img src="images/banner-mercury-5.jpg" alt="banner"/>
                        <div className="banner_info3">
                            <h1>MERCURY</h1>
                            <h4>Our watches are unisex</h4>
                            <a href="javascript:">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="banner_box4" ref="banner_box4">
                        <img src="images/banner-titan-1.jpg" alt="banner"/>
                        <div className="banner_info4">
                            <h1>TITAN</h1>
                            <h4>Super-light aluminium</h4>
                            <a href="javascript:">SHOP NOW</a>
                        </div>
                    </div>

                    <div className="banner_btn">
                        <div className="banner_btn_left" ref="leftBtn">
                            <a href="javascript:"><span>&lt;</span></a>
                        </div>
                        <div className="banner_btn_right" ref="rightBtn">
                            <a href="javascript:"><span>&gt;</span></a>
                        </div>
                    </div>
                    <ol className="banner_pageDots" ref="banner_pageDots">
                    </ol>
                </div>
                <div className="show_product">
                    <h1>Unique. Minimal. Aesthetic.</h1>
                    <h3>ZIIIRO watches are designed to make time for fun. Futuristic, minimalist, bold. Every design embodies the ZIIIRO vision of creating incredible timepieces with unique appearance and style. These space-age timekeepers remind us to zig while the world zags, and to take all the time we need to live and enjoy a life that’s awesome.</h3>
                    <div className="show_product_box">
                        {arr}
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
            </div>
        )
    }
});
exports.Home=Home;