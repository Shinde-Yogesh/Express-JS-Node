// creating the server
// install the package 
// listen is method and second one is callback function
import express from 'express';
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})