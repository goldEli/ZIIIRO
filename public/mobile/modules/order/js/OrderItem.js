/**
 * Created by Administrator on 2016/5/19.
 */
var React=require('react');
var OrderItem=React.createClass({
    del:function(){
        this.props.del(this.props.data['_id']);
    },
    plus:function(){
        var pid=this.props.data.product['_id'];
        var count=this.props.data.count;
        this.props.plus(pid,count);
    },
    minus:function(){
        var pid=this.props.data.product['_id'];
        var count=this.props.data.count;
        var id=this.props.data['_id'];
        this.props.minus(pid,count,id);
    },
    render:function(){
        var data=this.props.data.product;
        var count=parseInt(this.props.data.count);
        var price=data.price;
        var total=parseInt(price.substring(1))*count;
        return(
            <tr className="order_left_grid">
                <td className="product">
                    <a onClick={this.del} href="javascript:"><span>×</span></a>
                    <a href="javascript:"><img src={data.imgPathS[1]} alt="img"/></a>
                    <a href="javascript:"><p>{data.name}</p></a>
                </td>
                <td className="quantity">
                    <button onClick={this.plus}>+</button>
                    <span>{this.props.data.count}</span>
                    <button onClick={this.minus}>-</button>
                </td>
                <td className="total"><p>$ {total}</p></td>
            </tr>
        )
    }
});
exports.OrderItem=OrderItem;