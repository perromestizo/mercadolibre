'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import TextBox from 'components/common/text-box/TextBox';
import IconButton from 'components/common/icon-button/IconButton';
import { ENTER_KEY_CODE } from 'constants/keyCodes';
import styles from './search-box.scss';

const SEARCH_ICON = require('images/ic_Search.png'),
    SEARCH_RETINA_ICON = require('images/ic_Search@2x.png');

class SearchBox extends Component {

    constructor() {
        super();
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onClick = this._onClick.bind(this);
        this._search = this._search.bind(this);
    }

    /**
     * Fires the search when the Enter key is pressed.
     * @param {Number} keyCode - The code of the key pressed by the user.
     */
    _onKeyDown(keyCode) {
        if (keyCode === ENTER_KEY_CODE) {
            this._search();
        }
    }

    _onClick() {
        this._search();
    }

    _search() {
        let searchValue = this.refs.textBox.getValue();

        this.props.search(searchValue);
    }

    render() {
        return (
            <div className={classnames({
                [styles.searchBox]: true,
                [this.props.className]: !!this.props.className
            })}>
                <TextBox
                    ref='textBox'
                    className='text-box'
                    onKeyDown={this._onKeyDown}
                    placeholder='Nunca dejes de buscar' />

                <IconButton
                    className='search-icon'
                    icon={SEARCH_ICON}
                    retinaIcon={SEARCH_RETINA_ICON}
                    onClick={this._search}
                    alt='Search icon' />
            </div>
        );
    }
}

SearchBox.propTypes = {
    search: PropTypes.func.isRequired
};

export default SearchBox;
