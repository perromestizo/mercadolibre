'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';
import App from 'components/layout/app/App';
import ProductsList from 'components/core/products/products-list/ProductsList';
import ProductDetail from 'components/core/products/product-detail/ProductDetail';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <Route path='items' components={ProductsList}></Route>
            <Route path='items/:id' components={ProductDetail}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
