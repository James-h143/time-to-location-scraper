var impGLOBAL = require('./oGLOBAL'); var oGlobal = impGLOBAL.oGLOBAL;
var impDbecho = require('./dbEcho'); var dbEcho = impDbecho.dbEcho;

var getRawData = function(){
    dbEcho("getRawData had been triggered")
    
}

module.exports.getRawData = getRawData