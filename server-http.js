// //esm
// import axios from 'axios';
// // commonjs
// const axios = require ('axios');
import http from 'http';

const port = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
    console.log(req.method);
    const { method } = req;
    switch (method) {
        case 'GET':
            return handleGetMethod(res);
        default:
            throw new Error(`Not supported method ${method}`);
    }
});

function handleGetMethod(res) {
    res.end(JSON.stringify({ message: 'Success' }));
}

server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});