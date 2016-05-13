/**
 * Created by Administrator on 2016/5/13.
 */
var React=require('react');
var Link=require('react-router').Link;
var Order=React.createClass({
    render:function(){
        return(
            <div className="order">
                <h1>CART</h1>
                <div className="order_left fl">
                    <table>
                        <tr className="order_left_title">
                            <th>PRODUCT</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                        <tr className="order_left_grid">
                            <td className="product">
                                <a href="javascript:"><span>×</span></a>
                                <a href="javascript:"><img src="images/ziiiro-eclipse-metal-rosegold-front-200x300.jpg" alt="img"/></a>
                                <a href="javascript:"><p>ECLIPSE Steel Rose Gold</p></a>
                            </td>
                            <td className="quantity">
                                <button>+</button>
                                <span>1</span>
                                <button>-</button>
                            </td>
                            <td className="total"><p>$ 219.00</p></td>
                        </tr>
                    </table>
                </div>
                <div className="order_right">
                    <table>
                        <tr className="order_right_title">
                            <th>CART TOTALS</th>
                            <th></th>
                        </tr>
                        <tr className="subtotal">
                            <td>Subtotal</td>
                            <td>$ 219.00</td>
                        </tr>
                        <tr className="shipping">
                            <td>Shipping<br/><br/></td>
                            <td>
                                <div>
                                    <input type="radio" name="express"/><label> Free Shipping</label>
                                </div>
                                <div>
                                    <input type="radio" name="express"/><label> Standard Delivery: $ 25.00</label>
                                </div>
                                <div>
                                    <input type="radio" name="express"/><label> Express Delivery: $ 35.00</label>
                                </div>
                                <div className="blank"></div>
                            </td>
                        </tr>
                        <tr className="final_price">
                            <td>Total</td>
                            <td>$ 219.00</td>
                        </tr>
                    </table>
                    <button className="pay_bth">PROCEED TO CHECKOUT</button>
                </div>
            </div>
        )
    }
});
exports.Order=Order;