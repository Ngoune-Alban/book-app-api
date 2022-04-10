const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const hostname = 'localhost';
const port = 3000;


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.get('/health', function (req, res) {
    res.send('The API is working properly');
});
