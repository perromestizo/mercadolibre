'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './button.scss';

class Button extends Component {

    render() {
        return (
            <button className={classnames({
                [styles.button]: true,
                [styles.secondary]: this.props.isSecondary,
                [styles.disabled]: this.props.isDisabled,
                [this.props.className]: !!this.props.className
            })} onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}

Button.propTypes = {
    isDisabled: PropTypes.bool,
    isSecondary: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

Button.defaultProps = {
    isDisabled: false,
    isSecondary: false
};

export default Button;
