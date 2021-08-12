console.log("Hello World");
global.luckynum = '24';
console.log(global.luckynum);
console.log(process.platform);

const {EventEmitter} = require("events");
const eventemitter = new EventEmitter();

eventemitter.on('lunch', () => {
	console.log('yum')
})

eventemitter.emit('lunch');

const {readFile, readFileSync} = require("fs");
const txt = readFileSync('hello.txt', 'utf8');

console.log(txt);
console.log("hello2");

const mymodule = require('D:\\Node\\first-node-code\\my-module')
console.log(mymodule)

const express = require('express');

const app = new express();

app.get('/', (request, response) => {
	readFile('home.html', 'utf8', (err, html) => {
		if(err) {
			response.status(500).send("Sorry")
		}
		response.send(html)
	})
});

app.get('/foo', (request, response) => {
		response.send('foo')
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))