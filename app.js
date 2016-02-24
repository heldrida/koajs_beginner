var koa = require('koa');
var route = require('koa-route');
var app = koa();

function *index() {
	this.body = "<h1>Hello! This is my home page!</h1>";
}

function *about() {
	this.body = "<h2>My name is Adam and I like Javacript</h2>";
}

app.use(route.get('/', index));
app.use(route.get('/about', about));

app.listen(8080);
console.log("Koa listening on port 8080");