'use strict';

import React, { Component } from 'react';
import Header from 'components/layout/header/Header';
import styles from './app.scss';

/**
 * The top-level React component.
 */
class App extends Component {

    render() {
        return (
            <section className={styles.app}>
                <Header className='header' />
                <section className='content'>{this.props.children}</section>
            </section>
        );
    }
}

export default App;
