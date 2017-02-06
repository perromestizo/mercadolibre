'use strict';

let express = require('express'),
    axios = require('axios'),
    _ = require('lodash');

let server = express(),
    router = express.Router();

const PORT = 8000,
    BASE_URL = 'https://api.mercadolibre.com';

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/items', (req, res) => {
    let searchValue = req.query.search;

    if (searchValue) {
        axios.get(`${BASE_URL}/sites/MLA/search?q=${searchValue}`).then(response => {
            res.json(response.data);
        }).catch(error => {});
    }
});

router.get('/items/:id', (req, res) => {
    let id = req.params.id;

    if (id) {
        axios.all([
            axios.get(`${BASE_URL}/items/${id}`),
            axios.get(`${BASE_URL}/items/${id}/description`),
        ]).then(axios.spread((information, description) => {
            let product = _.merge(information.data, description.data);

            res.json(product);
        })).catch(error => {});
    }
});

server.use('/api', router);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});
