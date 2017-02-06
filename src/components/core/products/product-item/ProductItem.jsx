'use strict';

import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Icon from 'components/common/icon/Icon';
import styles from './product-item.scss';

const FREE_SHIPPING_ICON = require('images/ic_shipping.png'),
    FREE_SHIPPING_RETINA_ICON = require('images/ic_shipping@2x.png');

class ProductItem extends Component {

    constructor() {
        super();
        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        browserHistory.push(`/items/${this.props.id}`);
    }

    render() {
        return (
            <article className={styles.productItem} onClick={this._onClick}>
                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={this.props.thumbnail} />
                </div>
                <div className={styles.informationWrapper}>
                    <div className={styles.topBar}>
                        <span className={styles.price}>{this.props.price.toFixed(2)}</span>
                        { this.props.freeShipping ?
                            <Icon className='free-shipping-icon' icon={FREE_SHIPPING_ICON} retinaIcon={FREE_SHIPPING_RETINA_ICON} /> :
                            null
                        }
                    </div>
                    <span className={styles.title}>{this.props.title}</span>
                </div>
                <div className={styles.locationWrapper}>
                    <span className={styles.location}>{this.props.location}</span>
                </div>
            </article>
        );
    }
}

ProductItem.propTypes = {
    freeShipping: PropTypes.bool,
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

ProductItem.defaultProps = {
    freeShipping: false
};

export default ProductItem;
