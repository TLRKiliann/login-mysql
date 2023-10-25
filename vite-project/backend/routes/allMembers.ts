import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();
const pool = require('../dbConnection.ts');

router.get('/', async(req: Request, res: Response, next: NextFunction) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM users");
    console.log(result);
    res.status(200).json(result);
  } catch (err) {
    throw err;
  }
});

module.exports = router;