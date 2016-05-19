/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
require('../css/order.css');
var Header=require('../../header/js/Header.js').Header;
var OrderItem=require('./OrderItem').OrderItem;
var Order=React.createClass({
    getInitialState:function(){
        return({
            data:[],
            totalPrice:0,
            totalPriceWithD:0
        })
    },
    getTotal:function(data){
        var totalPrice=0;
        for(var i=0 ;i<data.length;++i){
            var count=parseInt(data[i].count);
            var price=data[i].product.price;
            var total=parseInt(price.substring(1))*count;
            totalPrice+=total;
        }
        this.setState({
            totalPrice:totalPrice
        });
        this.setState({totalPriceWithD:totalPrice});
    },
    showAll:function(){
        if(this.props.location.query.uid){
            $.ajax({
                type:'post',
                url:'/cart/showAll',
                data:{
                    uid:this.props.location.query.uid
                },
                success:function(data){
                    this.getTotal(data);
                    this.setState({data:data});
                }.bind(this)
            });
        }
    },
    componentDidMount:function(){
        $(this.refs.standard).click(function(){
            var num1=this.state.totalPrice+25;
            this.setState({totalPriceWithD:num1});
        }.bind(this));
        $(this.refs.express).click(function(){
            var num2=this.state.totalPrice+35;
            this.setState({totalPriceWithD:num2});
        }.bind(this));
        $(this.refs.free).click(function(){
            var num3=this.state.totalPrice;
            this.setState({totalPriceWithD:num3});
        }.bind(this));

    },
    componentWillMount:function(){
        this.showAll();
        //this.totalPriceWithD();
    },
    del:function(id){
      $.ajax({
          type:'post',
          url:'/cart/del',
          data:{
              id:id
          },
          success:function(){
              this.showAll();
          }.bind(this)
      })
    },
    plus:function(pid,count){
        $.ajax({
            type:'post',
            url:'/cart/add',
            data:{
                pid:pid,
                count:count,
                uid:this.props.location.query.uid
            },
            success:function(){
                this.showAll();
            }.bind(this)
        })
    },
    minus:function(pid,count,id){
        console.info([{pid},{count},{id}]);
        if(count>1){
            $.ajax({
                type:'post',
                url:'/cart/addMinus',
                data:{
                    pid:pid,
                    count:count,
                    uid:this.props.location.query.uid
                },
                success:function(){
                    this.showAll();
                }.bind(this)
            })
        }else{
            this.del(id);
        }
    },
    render:function(){
        var arr=[];
        if(this.state.data){
            arr=this.state.data.map(function(element){
                arr=element;
                return <OrderItem minus={this.minus} plus={this.plus} del={this.del} data={arr}/>
            }.bind(this));
        }
        return(
            <div className="order">
                <Header/>
                <h1></h1>
                <div className="order_left fl">
                    <table>
                        <tr className="order_left_title">
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                        {arr}
                    </table>
                </div>
                <div className="order_right fr">
                    <table>
                        <tr className="order_right_title">
                            <th>CART TOTALS</th>
                            <th></th>
                        </tr>
                        <tr className="subtotal">
                            <td>Subtotal</td>
                            <td>$ {this.state.totalPrice}</td>
                        </tr>
                        <tr className="shipping">
                            <td>Shipping<br/><br/></td>
                            <td>
                                <div>
                                    <input type="radio" ref="free" name="express"/><label> Free Shipping</label>
                                </div>
                                <div>
                                    <input type="radio" ref="standard" name="express"/><label> Standard Delivery: $ 25.00</label>
                                </div>
                                <div>
                                    <input type="radio" ref="express" name="express"/><label> Express Delivery: $ 35.00</label>
                                </div>
                                <div className="blank"></div>
                            </td>
                        </tr>
                        <tr className="final_price">
                            <td>Total</td>
                            <td ref="total">$ {this.state.totalPriceWithD}</td>
                        </tr>
                    </table>
                    <button className="pay_bth">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        )
    }
});
exports.Order=Order;