import React from 'react';

import {fetchProductThenInitOptions} from "../../../actions";
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


class ProductDetails extends React.Component {
    id = this.props.match.params.id


    componentDidMount() {
        //console.log(this.props.match);
        this.props.fetchProductThenInitOptions(this.id);
        //not do this may be

    }



    render() {

        if (!this.props.data) {
            return "Loading...";
        }
        const data = this.props.data;

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
        data: state.products[ownProps.match.params.id],
        options:state.options
    };
}
export default connect(mapStateToProps, {
    fetchProductThenInitOptions
})(ProductDetails);