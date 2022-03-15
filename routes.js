const routes = require('next-routes')();

// define a new route mapping
routes
    .add('/campaigns/new', '/campaigns/new')
    .add('/campaigns/:address', '/campaigns/show')
    .add('/campaigns/:address/requests', '/campaigns/requests/index');
module.exports = routes;

