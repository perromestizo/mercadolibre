'use strict';

import React, { Component, PropTypes } from 'react';
import { Container } from 'flux/utils';
import HtmlParser from 'html-react-parser';
import { getProductDetail, resetProduct } from 'actions/productsActionsCreators';
import ProductsStore from 'stores/ProductsStore';
import Button from 'components/common/button/Button';
import ProductConditionsMapper from 'utils/ProductConditionsMapper';
import styles from './product-detail.scss';

class ProductDetail extends Component {

    componentDidMount() {
        getProductDetail(this.props.params.id);
    }

    componentWillUnmount() {
        resetProduct();
    }

    static getStores() {
        return [ProductsStore];
    }

    static calculateState(prevState) {
        let nextState = ProductsStore.getState();

        return {
            product: nextState.get('product')
        };
    }

    _onClick() {}

    render() {
        let product = this.state.product;

        if (!product) {
            return null;
        }

        return (
            <section className={styles.productDetail}>
                <section className={styles.content}>
                    <img className={styles.image} src={product.pictures[0].url} />
                    <div>
                        <h4 className={styles.description}>Descripción del producto</h4>
                        { product.text ?
                            <div>{HtmlParser(product.text)}</div> :
                            <span className={styles.noDescription}>No hay descripción disponible.</span>
                        }
                    </div>
                </section>
                <aside className={styles.purchaseBox}>
                    <div className={styles.topBar}>
                        <span className={styles.condition}>{`${_.capitalize(ProductConditionsMapper.get(product.condition))}`}</span>
                        <span className={styles.soldQuantity}>{`${product.sold_quantity} vendidos`}</span>
                    </div>
                    <h3 className={styles.title}>{product.title}</h3>
                    <span className={styles.price}>{`${product.price.toFixed(2)}`}</span>
                    <Button className='purchase-button' label='Comprar' onClick={this._onClick} />
                </aside>
            </section>
        );
    }
}

export default Container.create(ProductDetail);
