import React from "react";
import { connect } from 'react-redux'
import { fetchProducts,addToCart } from "../../actions";
import NavBar from "./NavBar";
import MainContextH1 from "./MainContextH1";
import SortBar from "./SortBar";
import { NumberFormatted } from "../../apis/NumberFormat";
import Popup from "../Popup";
import _ from 'lodash';
import history from "../../base/history";


class ProductsList extends React.Component {
    state = { gridCols: 3 ,pop:null}


    componentDidMount() {
        this.props.fetchProducts()

    }
    showPopup = (id)=>{
        const pop = <Popup id={id} onClose={this.onPopClose}/>
        this.setState({pop});
    }
    onPopClose = ()=>{
        this.setState({pop:null})
    }
    handelAddToCart = (id,price)=>{
        const pc = document.getElementById(`product_${id}`)
        pc.classList.add('productCard__animation-addToCart');


        setTimeout(()=>{
            this.props.addToCart(id,price);
            pc.classList.remove('productCard__animation-addToCart')
        },800)
    }
    renderList() {
        return this.props.products.map(item => {
            return (
                <div key={item.id} className="productCard" id={`product_${item.id}`}>

                     <div className="product__Img" onClick={()=>{this.showPopup(item.id)}}>
                            <img src={item.media.split('|')[0]} alt={item.slug} />
                            <img src={item.media.split('|')[1]} alt={item.slug} />
                    </div>
                    <div className="product__name">
                        {item.name}
                        <button onClick={()=>{
                            history.push(`/detail/${item.id}`,{param1:1,param2:2})
                        }}>
                            ...
                        </button>

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
                    <div className="product__addCartButtonDiv">
                        <div onClick={()=>{this.handelAddToCart(item.id,item.price)}} className="product__addToCart">
                            Add To Cart
                        </div>
                    </div>
                </div>
            )
        })
    }
    changeGridColum = (x) => {
        this.setState({ gridCols: x })
    }
    render() {
        return (
            <div className="mainContext">
                <NavBar context="Home > Office"/>
                <MainContextH1 title="Office Chairs" />
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
    let products = Object.values(state.products);

    if(state.products.sort){
        products = _.chain(state.products)
            .omit('sort')
            .values()
            .forEach(value => _.update(value,'price',parseFloat))
            .orderBy(state.products.sort.which,state.products.sort.how)
            .value();
    }

    return {products};
}
export default connect(mapStateToProps, { fetchProducts,addToCart })(ProductsList);