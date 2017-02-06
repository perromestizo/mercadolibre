'use strict';

import { ReduceStore } from 'flux/utils';
import { SEARCH_PRODUCTS, GET_PRODUCT_DETAIL, RESET_PRODUCT } from 'constants/actionTypes';
import Immutable from 'immutable';
import Dispatcher from 'dispatcher/Dispatcher';
import _ from 'lodash';

class ProductsStore extends ReduceStore {

    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.Map({
            products: [],
            product: null
        });
    }

    reduce(state, action) {
        switch (action.type) {
            case SEARCH_PRODUCTS:
                return state.set('products', action.payload.products);

            case GET_PRODUCT_DETAIL:
                return state.set('product', action.payload.product);

            case RESET_PRODUCT:
                return state.set('product', null);

            default:
                return state;
        }
    }
}

export default new ProductsStore();
