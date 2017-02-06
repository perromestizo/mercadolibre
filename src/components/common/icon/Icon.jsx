'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './icon.scss';

class Icon extends Component {

    constructor() {
        super();
        this.state = {
            isRetinaDisplay: this._isRetinaDisplay()
        };
    }

    _isRetinaDisplay() {
        return window.devicePixelRatio >= 2;
    }

    render() {
        let icon = this.state.isRetinaDisplay && this.props.retinaIcon ? this.props.retinaIcon : this.props.icon;

        return (
            <img className={classnames({
                [this.props.className]: !!this.props.className
            })} src={icon} alt={this.props.alt} />
        );
    }
}

Icon.propTypes = {
    alt: PropTypes.string,
    icon: PropTypes.string.isRequired,
    retinaIcon: PropTypes.string
};

Icon.defaultProps = {
    alt: '',
    retinaIcon: ''
};

export default Icon;
