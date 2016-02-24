var koa = require('koa');
var route = require('koa-route');
var app = koa();

app.use(route.get('/', index));
app.use(route.get('/about', about));

app.listen(8080);
console.log("Koa listening on port 8080");