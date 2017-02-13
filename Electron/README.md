# Electron

##1. Introduction

By using Electron you can build a desktop app. Electron is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application. 

- Electron uses **Chromium** and **Node.js** so you can build your app with HTML, CSS, and JavaScript.
- Electron is an **open source** project maintained by **GitHub** and an active community of contributors.
- Compatible with Mac, Windows, and Linux, Electron apps build and run on three platforms

##2. Quick Start

For a quick-start you can follow these basic steps. This is extracted from its offical Website http://electron.atom.io/

###2.1 Installing Dependences

1. Clone the Quick Start repository
	
 		git clone https://github.com/electron/electron-quick-start

2. Go into the repository
	
 		cd electron-quick-start

3. Install the dependencies and run
	
 		npm install && npm start

###2.2 Create NodeJs Project
	
In order to create a new project from Scratch:
	
1. Creates json Package

 		npm init

2. Install Electron dependences.

 		npm install electron --save   // Remove --save for temporary dependences (not global)


##3. Basic Workflow 

###3.1 Installing NodeJS and Dependences

- Create a folder for the current project. Any name you want
- Be sure Nodejs is installed correctly and the variable path is set properly in environment path for the OS

	//Installing Nodejs
	Install Nodejs (nodejs and npm)

	// in order to configure the path where nodejs has been installed.
	rundll32 sysdm.cpl,EditEnvironmentVariables

	// Run following program.
	node sample.js 

###3.2 Create Electron default packages by using "npm init" inside the following folders
	
	\package.json
	
		{  mostly dependences }
	
	\app\package.json
		
		{ 
			name: "AngularElectron", 
			version: "0.0.0", 
			main: "main.js" 
		} 
		
###3.3 Install dependences for Electron. (in root folder)

		npm install --save-dev electron-prebuilt fs-jetpack asar rcedit Q
		
###3.4 Create the startup app "\app\main.js" with the following code
	
	// app/main.js

	// Module to control application life.
	// var app = require('app');
	// Module to create native browser window.
	// var BrowserWindow = require('browser-window');
	// var mainWindow = null;

	const electron = require("electron");
	const app = electron.app;
	const BrowserWindow = electron.BrowserWindow;
	let mainWindow;		

	
	// Quit when all windows are closed.
	app.on('window-all-closed', function () {
	  if (process.platform != 'darwin') {
		app.quit();
	  }
	});

	// This method will be called when Electron has finished
	// initialization and is ready to create browser windows.
	app.on('ready', function () {

	  // Create the browser window.
	  mainWindow = new BrowserWindow({ width: 800, height: 600 });

	  // and load the index.html of the app.
	  mainWindow.loadURL('file://' + __dirname + '/index.html');

	  // Open the devtools.
	  // mainWindow.openDevTools();
	  // Emitted when the window is closed.
	  mainWindow.on('closed', function () {

		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	  });

	});
		
###3.5  Create the start html files "\app\index.html" with the following code
	
		<html>
			<body> 
			  <h1>Hello World!</h1>
			   We are using Electron 
			   <script> document.write(process.versions['electron']) </script> on 
			   <script> document.write(process.platform) </script>
			   <script type="text/javascript"> 
				  var fs = require('fs');
				  var file = fs.readFileSync('app/package.json'); 
				  document.write(file); 
			   </script>

			</body> 
		</html> 
		
###3.6  Run the App
	
		"node_modules/.bin/electron" "./app" 
		
		NOTE: If the App it's in the same folder use ".bin/electron ."
		
###3.7 Install Gulp
	
		This is a task to automate the process of compiling and run the app. This will be useful to configure in Visual Studio Code later
	
		npm install --save-dev gulp
		
		"node_modules/.bin/gulp" run 
		
		NOTE: Check if GULP it's correctly set as environment variable.
		
		
###3.7.1  Run

	Create a file gulpfile.js in the root folder with the following code
	
		// get the dependencies
		var gulp        = require('gulp'), 
		  childProcess  = require('child_process'), 
		  electron      = require('electron-prebuilt');

		// create the gulp task
		gulp.task('run', function () { 
		  childProcess.spawn(electron, ['./app'], { stdio: 'inherit' }); 
		});

	Save and test "gulp run". Automatically the program will detect the previous file and run the task configured

	
	
	
		
		