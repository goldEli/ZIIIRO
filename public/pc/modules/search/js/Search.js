/**
 * Created by Administrator on 2016/5/12.
 */
var React=require('react');
var Link=require('react-router').Link;
var ShowItem=require('./ShowItem').ShowItem;
require('../css/search.css');
var Search=React.createClass({
    getInitialState: function(){
    return {
        data: [],
        searchItems:9
        };
    },
    search:function(){
        console.info(this.refs.searchInput.value);
        if(this.refs.searchInput.value){
            $.ajax({
                type:'post',
                url:'/product/search',
                data:{
                    name:this.refs.searchInput.value,
                    price:this.refs.searchInput.value,
                    category:this.refs.searchInput.value
                },
                success:function(data){
                    this.setState({
                        data:data,
                        searchItems:data.length
                    })
                }.bind(this)
            });
        }
    },
    componentWillMount:function(){
        console.info('componentWillMount');
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
            arr=this.state.data.map(function(element){
                arr=element;
                return <ShowItem data={arr}/>
            }.bind(this));
        }
        return(
            <div className="search">
                <div className="search_input">
                    <div className="search_input_area fr">
                        <button onClick={this.search.bind(this)}>search</button>
                        <input ref="searchInput" type="text"/>
                    </div>
                    <p>Showing all <i>{this.state.searchItems}</i> results</p>
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