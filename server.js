var express = require('express');
var parseString = require('xml2js').parseString;
var http = require('http');

var app = express();
var url = "http://bleacherreport.com/articles/feed?tag_id=215";

function xmlToJson(url, callback) {
  var req = http.get(url, function(res) {
    var xml = '';
    
    res.on('data', function(chunk) {
      xml += chunk;
    });

    res.on('error', function(e) {
      callback(e, null);
    }); 

    res.on('timeout', function(e) {
      callback(e, null);
    }); 

    res.on('end', function() {
      parseString(xml, function(err, result) {
        callback(null, result);
      });
    });
  });
}

app.get('/lfcfeeds', function (req, res) {
    xmlToJson(url, function (err, data) {
        if (err) {
            return console.err(err);
        }
        res.send(parseString);
    });
});

/*For Azure Deployment*/
app.listen(process.env.port);

//app.listen(3000);
//console.log('Listening on port 3000');
