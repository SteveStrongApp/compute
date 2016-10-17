//https://yakovfain.com/2015/12/22/setting-up-the-environment-for-node-js-and-typescript/

//https://vane.life/2015/11/22/code-in-real-world-typescript-step-by-step/

//https://github.com/vilic/vio

import * as http from 'http'; 


const server = http.createServer((request, response)=> {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!\n');
});

const port = 4000;

server.listen(port); // 2
console.log('Listening on http://localhost:' + port);