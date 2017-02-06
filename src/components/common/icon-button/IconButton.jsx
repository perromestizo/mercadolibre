'use strict';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Icon from 'components/common/icon/Icon';
import styles from './icon-button.scss';

class IconButton extends Component {

    render() {
        return (
            <i className={classnames({
                [styles.iconButton]: true,
                [this.props.className]: !!this.props.className
            })} onClick={this.props.onClick}>
                <Icon icon={this.props.icon} retinaIcon={this.props.retinaIcon} alt={this.props.alt} />
            </i>
        );
    }
}

IconButton.propTypes = {
    alt: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    retinaIcon: PropTypes.string.isRequired
};

export default IconButton;
