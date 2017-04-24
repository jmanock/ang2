var request = require('request');
var cheerio = require('cheerio');
var url = 'http://flvoters.com/download/20170228/20170307_VoterDetail/ORA_20170307.txt';

request(url, function(err, response, body){
  var count = 0;
  if(!err && response.statusCode === 200){
    var $ = cheerio.load(body);
    // Would line to get results of new line
    var line = '\n';
    for(var i = 0; i<body.length; i++){
      if(body[i].includes(line)){
        count++;
      }
    }
    console.log(count);

  }
});
