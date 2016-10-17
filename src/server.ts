

declare var __dirname;
  

import * as express from 'express';
import { handlebars } from  'consolidate'
import { Router } from 'vio';
import * as Path from 'path';

let app = express();


//app.engine('hbs', handlebars);

var myPath = Path.join(__dirname, '../static');
app.use('/static', express.static(myPath));

let router = new Router(app, {
    routesRoot: Path.join(__dirname,'routes'),
    viewsRoot: Path.join(__dirname,'../views')
    //viewsExtensions: 'hbs',
});

const port = 5000;

app.listen(port); 
console.log('Listening on http://localhost:' + port);

