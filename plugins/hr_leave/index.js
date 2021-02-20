'use strict';

exports.hrPlugin = {
    name: 'HR',
    register: async (server,options) =>{
        server.route(require('./routes/get_all_leaves'));
        server.route(require('./routes/get_emp_leave'));
    }
}
