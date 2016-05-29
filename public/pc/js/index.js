/**
 * Created by Administrator on 2016/5/12.
 */

var React=require('react');
var ReactDom=require('React-dom');
var Router=require("react-router").Router;
var Route=require("react-router").Route;
var IndexRoute=require("react-router").IndexRoute;
var hashHistory=require("react-router").hashHistory;


var Login=require("../modules/login/js/Login").Login;
var Home=require("../modules/home/js/Home").Home;
var Main=require("../modules/main/js/Main").Main;
var Order=require("../modules/order/js/Order").Order;
var Search=require("../modules/search/js/Search").Search;
var Details=require("../modules/details/js/Details").Details;
var Header=require("../modules/header/js/Header").Header;


ReactDom.render(
    <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/home" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/order" component={Order}></Route>
                <Route path="/search" component={Search}></Route>
                <Route path="/details" component={Details}></Route>
            </Route>
    </Router>
    ,document.getElementById('main'));