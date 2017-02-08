# NodeJs

##1. Installation

The first step will be to install NodeJS.
 
> In order to complete the installation, you will need to install both nodejs and npm pacakges. 
> The installation also can be done manually or self-extracting the contents of the installer into a folder.

You can download all the packages from the following URL. https://nodejs.org/en/

***********************

In order to configure the environment variable _PATH_ onto Microsft Windows, you will need to add the absolue path where nodejs has been installed.
>	rundll32 sysdm.cpl,EditEnvironmentVariables

*************************

##2. Examples

###2.1 HTTP Server

Create the project using node and npm to initialize it. Also, in this Step all the dependences will be installed and included to package.json

	// Run following program.
	node sample.js 

	//npm it's the node package manager used by nodejs, like pip in python.
	// In order to create an Express application. Create a package  package.json
	npm init

	// When entry point: (index.js) ->  index.js o app.js et.. 
	// Install Express dependences.
	npm install express --save   // Remove Save for temporary dependences

	// Some othe packages.
	npm install httpdispatcher --save 
	npm install electron --save 

Include this code into your configured entry point .

	//Lets requireimport the HTTP module
	var http = require('http');

	//Lets define a port we want to listen to
	const PORT=8080; 

	//We need a function which handles requests and send response
	function handleRequest(request, response){
	    response.end('It Works!! Path Hit ' + request.url);
	}

	//Create a server
	var server = http.createServer(handleRequest);

	//Lets start our server
	server.listen(PORT, function(){
	    //Callback triggered when server is successfully listening. Hurray!
	    console.log("Server listening on httplocalhost%s", PORT);
	});

Some useful link: https://blog.risingstack.com/your-first-node-js-http-server/

###2.2 Socket Server

For this particular example **express** dependency will be only needed.
Also, you have to include the your server code into your entry point.

	var express = require('express');
	var app = express();

	app.get('/', function (req, res) {
	  res.send('Hello World!');
	});

	app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
	});

###2.3 Flow Charts

	http://www.codeproject.com/Articles/709340/Implementing-a-Flowchart-with-SVG-and-AngularJS
	GoJS Samples
	
##3 Interacting with Python

There are several ways to execute code from Python inside NodeJS. 

###3.1 Command line like Nodejs-Shell
	
	//https://github.com/extrabacon/python-shell

	const spawn = require('child_process').spawn;
	const ls = spawn('ls', ['-lh', '/usr']);

	ls.stdout.on('data', (data) => {
	  console.log(`stdout: ${data}`);
	});

	ls.stderr.on('data', (data) => {
	  console.log(`stderr: ${data}`);
	});

	ls.on('close', (code) => {
	  console.log(`child process exited with code ${code}`);
	});

	
###3.2 RPC - Remote Procedure Call
	
	http://arcware.net/installing-rabbitmq-on-windows/
	https://github.com/osharim/Communicate-Python-with-NodeJS-through-RabbitMQ

###3.3 References

	http://www.sohamkamani.com/blog/2015/08/21/python-nodejs-comm/   // Interact python with Nodejs
	http://stackoverflow.com/questions/27279305/executing-python-script-from-nodejs-express-instance-using-a-relative-url


