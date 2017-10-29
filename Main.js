var impGLOBAL = require('./oGLOBAL.js'); var oGlobal = impGLOBAL.oGLOBAL;
var impDbecho = require('./dbEcho.js'); var dbEcho = impDbecho.dbEcho;
var impGetRawData = require('./getRawData.js'); var getRawData = impGetRawData.getRawData;


var Main = function(){
    dbEcho("Main() has been triggered")
    var webpage = getRawData()    
    
}

module.exports.Main = Main