'use strict';
var path = require('path');
var xsjs = require('sap-xsjs');
var xsenv = require('sap-xsenv');
var port = process.env.PORT || 3000;

var options = xsjs.extend({
  rootDir: path.join(__dirname, 'src'),
  redirectUrl: '/index.xsjs',
  port: port
}, xsenv.getServices(
	{
		hana:{ tag:'hana' }, 
	 	uaa:{ name:process.env.UAA_SERVICE_NAME }
	}
));

xsjs(options).listen(port);

