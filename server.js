/**
 * This API is designed to provide a feed of news from users
 * 
 * Author: Diego M. Silva
 */


// IMPORTS
var http = require('http');
var events = require('events');
var url = require('url');
var fs = require("fs");


// ATTRIBUTES
var eventEmitter = new events.EventEmitter();


// SERVER
/**
 * Creates an HTTP server to allow http requests
 */
http.createServer(function (req, response){
    
    // Parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");
    
    
    
    
    
}).listen(process.env.PORT, process.env.IP);