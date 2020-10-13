import React from "react";
import {connect} from 'react-redux'
import {addToCart, fetchProducts} from "../../actions";
import NavBar from "./NavBar";
import MainContextH1 from "./MainContextH1";
import SortBar from "./SortBar";
import {NumberFormatted} from "../../apis/NumberFormat";
//import Popup from "../Popup";
import _ from 'lodash';
import history from "../../base/history";
import Spinner from "../Spinner";


class ProductsList extends React.Component {
    state = {gridCols: 3}

    componentDidMount() {
        this.props.fetchProducts()
    }

    handleOpen = (id) => {
        history.push(`/detail/${id}`)
    }

    renderList() {
        return this.props.products.map(item => {
            return (
                <div key={item.id} className="productCard" id={`product_${item.id}`}>

                    <div className="product__Img" onClick={() => {
                        this.handleOpen(item.id);
                    }}>
                        <img src={item.media.split('|')[0]} alt={item.slug}/>
                        <img src={item.media.split('|')[1]} alt={item.slug}/>
                    </div>
                    <div className="product__name">
                        {item.name}
                    </div>

                    <div className="product__colors">
                        <div className="divBtn divBtn--black">&nbsp;</div>
                        <div className="divBtn divBtn--blue">&nbsp;</div>
                        <div className="divBtn divBtn--gray">&nbsp;</div>
                        <div className="divBtn divBtn--pink">&nbsp;</div>
                        <div className="divBtn divBtn--white">&nbsp;</div>
                        <div className="divBtn divBtn--red">&nbsp;</div>
                    </div>
                    <div className="product__price">{NumberFormatted(item.price)}</div>
                    <div className="product__freeShipping">Free Shipping</div>
                    {/*<div className="product__addCartButtonDiv">*/}
                    {/*    <div onClick={()=>{this.handelAddToCart(item.id,item.price)}} className="product__addToCart">*/}
                    {/*        Add To Cart*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            )
        })
    }

    changeGridColum = (x) => {
        this.setState({gridCols: x})
    }

    render() {
        if ((!this.props.products) || (this.props.products.isFetching)) {
            return <Spinner message={"Loading...."}/>
        }
        return (
            <div className="mainContext">
                <NavBar context="Home > Office"/>
                <MainContextH1 title="Office Chairs"/>
                <SortBar everyPageShow={this.props.products.length}
                         total={this.props.products.length}
                         onChangeGridColum={this.changeGridColum}
                         colum={this.state.gridCols}
                />
                <div id="productslist" className={`productsGrid--${this.state.gridCols}`}>
                    {this.renderList()}
                </div>
                {this.state.pop}
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    if (_.isEmpty(state.products.data)) {
        return {};
    }

    let products = Object.values(state.products.data);

    if (state.products.sort) {
        products = _.chain(state.products.data)
            .omit('sort')
            .values()
            .forEach(value => _.update(value, 'price', parseFloat))
            .orderBy(state.products.sort.which, state.products.sort.how)
            .value();
    }

    return {products};
}
export default connect(mapStateToProps, {fetchProducts, addToCart})(ProductsList);