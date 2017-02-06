'use strict';

import React, { Component } from 'react';
import { Container } from 'flux/utils';
import { searchProducts } from 'actions/productsActionsCreators';
import ProductsStore from 'stores/ProductsStore';
import ProductItem from 'components/core/products/product-item/ProductItem';
import styles from './products-list.scss';

class ProductsList extends Component {

    componentDidMount() {
        searchProducts(this.props.location.query.search);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.query.search !== nextProps.location.query.search) {
            searchProducts(nextProps.location.query.search);
        }
    }

    static getStores() {
        return [ProductsStore];
    }

    static calculateState(prevState) {
        let nextState = ProductsStore.getState();

        return {
            products: nextState.get('products')
        };
    }

    _buildProductsList() {
        return this.state.products.map((product, index) => {
            return (
                <ProductItem
                    freeShipping={product.shipping.free_shipping}
                    id={product.id}
                    key={index}
                    location={product.address.state_name}
                    price={product.price}
                    thumbnail={product.thumbnail}
                    title={product.title} />
            );
        });
    }

    render() {
        return (
            <section>
                {this._buildProductsList()}
            </section>
        );
    }
}

export default Container.create(ProductsList);
