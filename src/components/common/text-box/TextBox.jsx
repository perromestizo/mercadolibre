'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './text-box.scss';

class TextBox extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this._onChange = this._onChange.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    _onChange(event) {
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
    }

    _onKeyDown(event) {
        if (this.props.onKeyDown) {
            this.props.onKeyDown(event.keyCode);
        }
    }

    getValue() {
        return this.state.value;
    }

    render() {
        return (
            <input type='text'
                className={classnames({
                    [styles.textBox]: true,
                    [this.props.className]: !!this.props.className
                })}
                value={this.state.value}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                placeholder={this.props.placeholder} />
        );
    }
}

TextBox.propTypes = {
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string
};

TextBox.defaultProps = {
    placeholder: ''
};

export default TextBox;
