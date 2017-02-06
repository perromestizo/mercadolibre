'use strict';

import axios from 'axios';
import { BASE_URL } from 'config/settings';

export default {

    getProductsBySearchValue(searchValue) {
        return axios.get(`${BASE_URL}/items?search=${searchValue}`);
    },

    getProductDetailById(id) {
        return axios.get(`${BASE_URL}/items/${id}`);
    }
};
