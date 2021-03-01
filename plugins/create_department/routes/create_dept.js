'use strict';
const {deptHandler} = require('../handlers/create_dept');
const {deptBodyValidation} = require('../validations/create_dept');


module.exports = {
    method: 'POST',
    path: '/department',
    handler: deptHandler,
    options:{
        auth: 'jwt',
        description: 'Create new department',
        notes: 'Creates new department which can be done only by hr',
        tags: ['api'],
        validate:{
            payload: deptBodyValidation
        }
    }
};