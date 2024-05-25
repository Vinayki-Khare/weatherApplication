const http = require("http");
const fs = require("fs");
const requests = require("requests");
const homeFile = fs.readFileSync("Home.html", "utf-8");
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests('http://api.openweathermap.org/data/2.5/weather?q=pune&appid=03be4ee64e4432f5ee81bb20b5d9c4d0')
            .on('data', function (chunk) {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                console.log(arrData[0].main.temp);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }
})
server.listen(5500,"127.0.0.1")