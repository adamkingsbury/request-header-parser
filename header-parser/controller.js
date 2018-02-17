var useragent = require('useragent');
useragent(true);

var headerParser = function(req, res, next){
  
  //TODO
  //test to see if a header agent has already been injected into 
  //the express app. if not, do so

  
  //agent results
  var ar = useragent.parse(req.headers['user-agent']);
  
  //build response information
  var reqInfo = {
    ip: req.ip,
    operatingSystem: ar.os.toString(),
    device: ar.device.toVersion(),
    browser: ar.toString(),
    language: req.headers['accept-language'],
//    originalHeaders: req.headers
  };
  
  //inject data onto the req object
  //prefixing with 'ajk' to avoid collisions
  req.ajkReqInfo = reqInfo;
    
  //pass onto the next middleware
  next();
};
  
module.exports = headerParser;