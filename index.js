var requests = require("requests");
const http = require('http');
const fs = require('fs');
const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=39f2ab3561e2a145c91d0b2c62eb43fc')
            .on('data', function (chunk) {
                console.log(chunk)
            }) 
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }else{
        res.end("File Not Found.");
    }
});
server.listen(8000,"127.0.0.1");
