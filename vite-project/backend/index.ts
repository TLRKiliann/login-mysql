import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';

const cors = require('cors');
const PORT = 5000;
const app = express();

const verifyUser = require('./routes/allMembers');
const userStatus = require('./routes/statusLogin');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

dotenv.config();

app.use(function(req: Request, res: Response, next: NextFunction) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Content-Type', 'application/json');
  next();
});

app.use('/api/login', verifyUser);
app.use('/api/loginDashboard', userStatus);

app.listen(PORT, (): void => {
  console.log(`[+] Server is running on port: ${PORT} !`)
});