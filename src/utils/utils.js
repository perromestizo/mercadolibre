'use strict';

/**
 * Detects whether the scheme of a URL is http or https.
 * @param {String} value
 * @returns {Boolean}
 */
export const isHttp = value => {
    let url = require('url').URL(value);

    return url.protocol.match(/^(http(s)?)$/);
};
