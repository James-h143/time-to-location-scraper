var impGLOBAL = require('./oGLOBAL.js'); var oGlobal = impGLOBAL.oGLOBAL;
var impDbecho = require('./dbEcho.js'); var dbEcho = impDbecho.dbEcho;

var getRawData = function(){
    dbEcho("getRawData had been triggered")
    
}

module.exports.getRawData = getRawData