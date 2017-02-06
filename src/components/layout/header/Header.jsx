'use strict';

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import classnames from 'classnames';
import IconButton from 'components/common/icon-button/IconButton';
import SearchBox from 'components/common/search-box/SearchBox';
import styles from './header.scss';

const MERCADOLIBRE_LOGO = require('images/Logo_ML.png'),
    MERCADOLIBRE_RETINA_LOGO = require('images/Logo_ML@2x.png');

class Header extends Component {

    _search(searchValue) {
        if (searchValue) {
            browserHistory.push(`/items?search=${searchValue}`);
        }
    }

    _onClick() {
        browserHistory.push('/');
    }

    render() {
        return (
            <header className={classnames({
                [styles.header]: true,
                [this.props.className]: !!this.props.className
            })}>
                <IconButton
                    className='logo'
                    icon={MERCADOLIBRE_LOGO}
                    retinaIcon={MERCADOLIBRE_RETINA_LOGO}
                    onClick={this._onClick}
                    alt='MercadoLibre logo' />
                <SearchBox className='search-bar' search={this._search} />
            </header>
        );
    }
}

export default Header;
