# Node.js

> Node.js is an open-source, cross-platform JavaScript runtime environment for developing a diverse variety of server tools and applications. Although Node.js is not a JavaScript framework, **many** of its basic modules are written in **JavaScript**, and developers can write new modules in JavaScript. The runtime environment interprets JavaScript using Google's V8 JavaScript engine.

> Node.js has an event-driven architecture capable of **asynchronous I/O**. These design choices aim to optimize throughput and scalability in Web applications with many **input/output operations**, as well as for **real-time Web applications** (e.g., real-time communication programs and browser games).

*************************************	

	npm is used to update/install/uninstall packages and to run the server by default.
 	node compiles the java-scripts files and run the server.
 	nodemon this tool is used to re-start the server when the code has been modified.		
 
******************************************
	
#1. Installation

Download and Install Node.js from its web site (http://nodejs.org/download/).

###1. For automatic installation follow the steps described in the wizard setup.

###2. For manual installation (No Admin or cleaner installation)

1. Extract the content of the msi installer using **"lessmsi"**.
2. Open the environment variable window by using **"rundll32 sysdm.cpl,EditEnvironmentVariables"**
3. Add to local paths the folder where the content has been extracted. (Be sure the folder contains node.exe and npm.cmd files) 

###3. Test Installation

####3.1 Create a folder and a new file (sample.js) with the following content.
	
	(sample.js)

	//Lets require/import the HTTP module
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
	
####3.2 Run the server using the following line in the command prompt windows.
		
	// Run following program.
	node sample.js 
		
	// To Test the server open a Web browser and usr the URL (If a firewall windows pop-up just ignore it)
	http:\\localhost:8080

####3.3 Packages Installation and Updates 
	
	//npm it's the Package Manager tool (installaer, updater) used by node.js, like pip in python.
	npm install -g express // Global installation of expres using -g command
	npm install express --save // Save the dependences temporary into the current folder (app)
	npm update express
					
	// Example -> In order to install and create an Express application. 
	
	//Create and initialize "package.json"// follow the steps in the wizard to create this file.
	npm init

	// When entry point: (index.js) // index.js o app.js et.. 
	// Install Express dependences.
	npm install express --save   // Remove Save for temporary dependences

	// following installation of other packages like httpdispatcher or electron.
	npm install httpdispatcher --save 
	npm install electron --save 

#2. Installing Dependences

##2.1 Install Packages 
	
	npm install -g gulp // Build tool
	npm install -g bower // Managers Front-end packages 

	//Install MEAN CLI (Command Line interface)
	
	npm install -g mean-cli 
	mean init <myApp>
	cd <myApp> && npm install
	
	//To run use gulp or node server

##2.2 Update Packages

	npm update -g npm  //Updating NPM
	npm update -g gulp // Updating Gulp
	npm update -g bower  // Updating Bower
	
##2.3 Clean Cache

	npm cache clean	
	bower cache clean

##2.4 Troubleshooting

1. Mean.io dependencies uses node-gyp with supported Python version 2.7.x. So if you see an error related to node-gyp 
2. Git “not found” on Windows

##2.5 Additional Dependences

- **Mongoose** The mongodb node.js driver in charge of providing elegant mongodb object modeling for node.js
- **Passport** An authentication middleware for Node.js which supports authentication using a username and password, Facebook, Twitter, and more.
- **Twitter Bootstrap** The most popular HTML, CSS, and JS framework for developing responsive, mobile first projects.
- **UI Bootstrap** Bootstrap components written in pure AngularJS

