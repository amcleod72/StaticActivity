'use strict';
var https = require( 'https' );
var activityUtils = require('./activityUtils');

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    activityUtils.logData( req );
    res.send( 200, 'Edit' );
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    activityUtils.logData( req );
    res.send( 200, 'Save' );
};

/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    activityUtils.logData( req );
    res.send( 200, 'Publish' );
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    activityUtils.logData( req );
    res.send( 200, 'Validate' );
};

/*
 * POST Handler for /execute/ route of Activity.
 */
exports.execute = function( req, res ) {
    // Data from the req and put it in an array accessible to the main app.
    console.log( req.body );
    //activityUtils.logData( req );

    var obj = {};

    // Create a random number to emulate decisioning
    var rand = Math.floor(Math.random() * 5);

    if (rand == 1){
        obj = {"branchResult":"control"};
    } else {
        obj = {"branchResult":"target"};
    }

    res.send(200, obj);
};
