/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var ShowItem=require('./ShowItem').ShowItem;
var Search=React.createClass({
    getInitialState: function(){
    return {
        data: []
        };
    },
    componentWillMount:function(){
        $.ajax({
            type:'post',
            url:'/product/showAllProduct',
            success:function(data){
                this.setState({data:data});
            }.bind(this)
        });
    },
    render:function(){
        var arr=[];
        if(this.state.data.length>0){
            console.info(1);
            arr=this.state.data.map(function(element){
                arr=element;
                return <ShowItem data={arr}/>
            }.bind(this));
        }
        console.info(arr);
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
                    {arr}
                </div>
            </div>
        )
    }
});
exports.Search=Search;