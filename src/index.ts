import express from 'express';
import handlerMap from './handlers';
import { AdguardEvent, load } from './config';

const app = express();
const port: number = parseInt(process.env.PORT, 10) || 8070; // default port to listen

const config = load('./config.json');

// define a route handler for the default home page
app.get('/', async (req, res) => {
    const events: Array<AdguardEvent> = JSON.parse(req.body);
    events.forEach(event => handlerMap[event](config));
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
