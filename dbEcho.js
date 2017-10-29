var impGLOBAL = require('./oGLOBAL'); var oGlobal = impGLOBAL.oGLOBAL;

var dbEcho = function(str) {
    if(oGlobal.debugMode == 1) {
        console.log(str)
    }

}

module.exports.dbEcho = dbEcho