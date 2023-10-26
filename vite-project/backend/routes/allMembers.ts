import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();
const pool = require('../dbConnection.ts');

// get
router.get('/', async(req: Request, res: Response, next: NextFunction) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM users");
    res.status(200).json(result);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
    }
});

module.exports = router;
