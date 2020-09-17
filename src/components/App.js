import React from 'react';
import Header from "./header/Header";
import '../css/chairstore.css'
import ProductsList from "./products/ProductsList";
import Footer from "./footer/Footer";

const App = () => {
    return (
        <div>
            <Header/>
            <ProductsList />
            <Footer/>
        </div>

    );
};

export default App;