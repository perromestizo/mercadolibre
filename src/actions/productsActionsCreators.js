'use strict';

import axios from 'axios';
import { SEARCH_PRODUCTS, GET_PRODUCT_DETAIL, RESET_PRODUCT } from 'constants/actionTypes';
import Dispatcher from 'dispatcher/Dispatcher';
import ApiUtils from 'utils/ApiUtils';

export const searchProducts = searchValue => {
    ApiUtils.getProductsBySearchValue(searchValue).then(response => {
        Dispatcher.dispatch({
            type: SEARCH_PRODUCTS,
            payload: {
                products: response.data.results
            }
        });
    }).catch(error => {
        console.error(error);
    });
};

export const getProductDetail = id => {
    ApiUtils.getProductDetailById(id).then(response => {
        Dispatcher.dispatch({
            type: GET_PRODUCT_DETAIL,
            payload: {
                product: response.data
            }
        });
    }).catch(error => {
        console.error(error);
    });
};

export const resetProduct = () => {
    Dispatcher.dispatch({
        type: RESET_PRODUCT
    });
};
