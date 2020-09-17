import React from "react";
import {connect} from 'react-redux'
import {fetchProducts} from "../../actions";
import NavBar from "./NavBar";
import MainContextH1 from "./MainContextH1";
import SortBar from "./SortBar";
import {NumberFormatted} from "../../apis/NumberFormat";


class ProductsList extends React.Component {
    state = {gridCols:3}
    componentDidMount() {
        this.props.fetchProducts()
    }

    renderList(){
        return this.props.products.map(item=>{
           return (
                <div key={item.id} className="productCard">
                    
                        <div className="product__Img">
                            <img src={item.media.split('|')[0]} alt={item.slug}/>
                            <img src={item.media.split('|')[1]} alt={item.slug}/>
                        </div>
                        <div className="product__name">{item.name}</div>

                        <div className="product__colors">
                            <div className="divBtn divBtn--black">&nbsp;</div>
                            <div className="divBtn divBtn--blue">&nbsp;</div>
                            <div className="divBtn divBtn--gray">&nbsp;</div>
                            <div className="divBtn divBtn--pink">&nbsp;</div>
                            <div className="divBtn divBtn--white">&nbsp;</div>
                            <div className="divBtn divBtn--red">&nbsp;</div>
                        </div>
                        <div className="product__price">{NumberFormatted(item.price).toString()}</div>
                        <div className="product__freeShipping">Free Shipping</div>
                        <div className="product__addCartButtonDiv">
                            <a href="#" className="product__addToCart">
                                Add To Cart
                            </a>
                        </div>
                </div>
            )
        })
    }
    changeGridColum=(x)=>{
        this.setState({gridCols:x})
    }
    render() {
        return (
            <div className="mainContext mainContext_padding">
                <NavBar/>
                <MainContextH1 title="New"/>
                <SortBar everyPageShow={this.props.products.length}
                         total={this.props.products.length}
                         onChangeGridColum ={this.changeGridColum}
                         colum = {this.state.gridCols}
                />
                <div id="productslist" className={`productsGrid--${this.state.gridCols}`}>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
    products:Object.values(state.products)
 };
}
export default connect(mapStateToProps,{fetchProducts})(ProductsList);