/**
 * Created by Administrator on 2016/5/18.
 */
var React=require('react');
var OrderItem=React.createClass({
    render: function () {
        var data=this.props.data.product;
        var count=parseInt(this.props.data.count);
        var price=data.price;
        var total=parseInt(price.substring(1))*count;
        return(
            <tr className="order_left_grid">
                <td className="product">
                    <a href="javascript:"><span>×</span></a>
                    <a href="javascript:"><img src={data.imgPathS[1]} alt="img"/></a>
                    <a href="javascript:"><p>{data.name}</p></a>
                </td>
                <td className="price"><p>{data.price}</p></td>
                <td className="quantity">
                    <button>+</button>
                    <span>{this.props.data.count}</span>
                    <button>-</button>
                </td>
                <td className="total"><p>${total}</p></td>
            </tr>
        )
    }
});
exports.OrderItem=OrderItem;