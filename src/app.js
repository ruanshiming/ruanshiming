import path from 'path';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import Route from "./routes/index.js";
//import client from './config/connectdb.js';

const app = express();
const port = 2312;
const __dirname = import.meta.dirname;


//Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Set Templating Engine
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');


app.use('/', Route);


app.listen(port, () => console.info(`App listening on port ${port}`));
