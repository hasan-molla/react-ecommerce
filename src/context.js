import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailsproduct: detailProduct
    }
    handleDetails = () => {
        console.log("I am from details");
    }
    addToCart = () =>{
        console.log("I am from Add to Cart");
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetais: this.handleDetails,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};