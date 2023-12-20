// creating the server
// install the package 
// listen is method and second one is callback function
import express from 'express';
const app = express();
const port = 3000;

// /*
// // for the HTTP request
// app.get("/", (req, res) => {
//     console.log(req.rawHeaders);
// })
// return the following output
// [
//     'Host',
//     'localhost:3000',
//     'Connection',
//     'keep-alive',
//     'Cache-Control',
//     'max-age=0',
//     'sec-ch-ua',
//     '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
//     'sec-ch-ua-mobile',
//     '?0',
//     'sec-ch-ua-platform',
//     '"Windows"',
//     'Upgrade-Insecure-Requests',
//     '1',
//     'User-Agent',
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
//     'Accept',
//     'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
//     'Sec-Fetch-Site',
//     'none',
//     'Sec-Fetch-Mode',
//     'navigate',
//     'Sec-Fetch-User',
//     '?1',
//     'Sec-Fetch-Dest',
//     'document',
//     'Accept-Encoding',
//     'gzip, deflate, br',
//     'Accept-Language',
//     'en-US,en;q=0.9,mr;q=0.8'
//   ]
 
//   */

// for the HTTP request
app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/register", (req, res) => {
    res.sendStatus(201)
})

// for put

app.put("/user/yogesh",(req,res) =>
{
    res.sendStatus(200)
})

app.patch("/user/yogesh",(req,res) =>
{
    res.sendStatus(200)
})
app.delete("/user/yogesh",(req,res) =>
{
    res.sendStatus(200)
})




app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// TO check the surver running on : netstat -ano | findstr "LISTENING"
// nodemon is package for restrat the application attomatically