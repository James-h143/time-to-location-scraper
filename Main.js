var impGLOBAL = require('./oGLOBAL'); var oGlobal = impGLOBAL.oGLOBAL;
var impDbecho = require('./dbEcho'); var dbEcho = impDbecho.dbEcho;
var impGetRawData = require('./getRawData'); var getRawData = impGetRawData.getRawData;


var Main = function(){
    dbEcho("Main() has been triggered")
    var webpage = getRawData()    
    
}

module.exports.Main = Main