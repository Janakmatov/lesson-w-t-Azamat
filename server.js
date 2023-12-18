// esm
// import axios from 'axios';
// commonjs
// const axios = require ('axios');

/*import http from 'http';
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
});*/
import express from 'express';
import fetch from 'node-fetch'; // Import the 'node-fetch' library for making HTTP requests
import { v4 as uuid } from 'uuid';

const server = express();
const port = process.env.PORT || 8000;
server.use(express.json());

server.get('/', async (req, res) => {
  res.json({ message: 'hello world' });
});

// Remove the second server.get('/') route

server.get('/users', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    res.status(200).end(JSON.stringify(data)); // Use res.json directly instead of res.end(JSON.stringify(data))
  } catch (error) {
    console.log('Something went wrong', error);
    res.status(500).json({ error: 'Internal Server Error' }); // Handle the error and send an appropriate response
  }
  // Handle '/users' route
});

server.get('/users/:id', (req, res) => {
  // Handle '/users/:id' route
});

server.delete('/', (req, res) => {
  // Handle DELETE '/'
});

server.post('/', (req, res) => {
  // Handle POST '/'
});

server.patch('/', (req, res) => {
  // Handle PATCH '/'
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

