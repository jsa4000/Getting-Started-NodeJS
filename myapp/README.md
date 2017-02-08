# NodeJs

##1. Installation

First at all, you need to install NodeJS.
 
> In order to complete the installation, you will need to install both nodejs and npm pacakges. Only for the cases where you are doing the installation manually or self-extracting the contents of the installer into a folder.

You can download all the packages  fromn the following URL. https://nodejs.org/en/

***********************

In order to configure the environment PATH vatiable in Ms Windows, youe need to configure the absolue path where nodejs has been installed.
>	rundll32 sysdm.cpl,EditEnvironmentVariables

*************************

##2. First Program

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


Some useful pages: https://blog.risingstack.com/your-first-node-js-http-server/
	
	
##2 Flow Charts

	http://www.codeproject.com/Articles/709340/Implementing-a-Flowchart-with-SVG-and-AngularJS
	GoJS Samples
	
##3 Interacting with Python

There exists several ways to execute code from Python inside NodeJS. 

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


