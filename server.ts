import express from 'express';
import morgan from 'morgan';
import { connectDB } from './db/connectDB';
import { config } from 'dotenv';
import robotsRouter from './api/robot.router';
import projectsRouter from './api/project.router';

const app = express();
const PORT: number = 4000;

// load environmental variable
config({ path: __dirname + '/.env.development' });

// connect to db
connectDB();

// body parser
app.use(express.json());

// logging middleware for requests
app.use(morgan('dev'));

// send it.
// example: app.use('/api/users', require('./api/users'));
app.use('/robots', robotsRouter);
app.use('/projects', projectsRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
