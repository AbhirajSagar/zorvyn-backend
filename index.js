import dotenv from 'dotenv'
import express from 'express'
import { setupMongooseConnection } from './lib/MongooseConnection.js';

import v1Routes from './routes/v1/V1Routes.js';
import errorHandler from './middlewares/ErrorHandler.js';

dotenv.config()

if (process.env.NODE_ENV !== 'test') {
    setupMongooseConnection();
}

const app = express();

app.use(express.json());
app.use('/v1', v1Routes);

app.use(errorHandler);

if (process.env.NODE_ENV !== 'test') {
    app.listen(3000, () => console.log('Example app listening on port 3000!'));
}

export default app;