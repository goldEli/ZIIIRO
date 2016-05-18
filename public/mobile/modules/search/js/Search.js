/**
 * Created by Administrator on 2016/5/13.
 */
var React=require('react');
var Link=require('react-router').Link;
var SearchItem=require('./SearchItem').SearchItem;
var Search=React.createClass({
    getInitialState: function(){
        return {
            data: [],
            searchItems:9
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
    render:function(){
        var arr=[];
        if(this.state.data.length>0){
            arr=this.state.data.map(function(element){
                arr=element;
                return <SearchItem data={arr}/>
            });
        }
        return(
            <div className="search">
                <div className="search_input">
                    <div className="search_input_area fr">
                        <button onClick={this.search.bind(this)}>search</button>
                        <input type="text" ref="searchInput"/>
                    </div>
                    <p>Showing all <i>{this.state.searchItems}</i> results</p>
                </div>
                <div className="show_product">
                    <div className="show_product_box">
                        {arr}
                    </div>
                </div>
            </div>
        )
    }
});
exports.Search=Search;