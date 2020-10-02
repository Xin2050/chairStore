import React from 'react';

import {fetchProduct,optionsInit} from "../../../actions";
import {connect} from 'react-redux'
import NavBar from "../NavBar";
import MainPictures from "./MainPictures";
import MainInfo from "./MainInfo";
import ProductDescription from "./ProductDescription";
import FeaturedImages from "./FeaturedImages";
import ProductAd1 from "./ProductAD1";
import ProductAd2 from "./ProductAD2";
import Specification from "./Specification";
import AddtoCartBar from "./AddtoCartBar";


class Index extends React.Component {
    id = this.props.match.params.id

    componentDidMount() {
        this.props.fetchProduct(this.id);

    }

    render() {
        const data = this.props.data;
        if (!data) {
            return "Loading...";
        }
        this.props.optionsInit(this.id,data.price);
        return (

            <div className="mainContext">
                <NavBar context={`Office > Office Chairs > ${data.name}`}/>
                <AddtoCartBar data={data}/>
                <div className="productFrame">
                    <div className="productFrame__left">
                        <MainPictures media={data.media.split('|')} id={this.id}/>
                    </div>
                    <div className="productFrame__right">
                        <MainInfo data={data}/>
                    </div>
                </div>
                <ProductDescription/>
                <FeaturedImages/>
                <ProductAd1/>
                <ProductAd2/>
                <Specification/>

            </div>
        );
    }


};
const mapStateToProps = (state,ownProps) => {
    return {
        data: state.products[ownProps.match.params.id]
    };
}
export default connect(mapStateToProps, {fetchProduct,optionsInit})(Index);