import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();
const pool = require('../dbConnection.ts');

// post to authenticate admin
router.post('/', async(req: Request, res: Response, next: NextFunction) => {
  const pseudo: string = req.body.username;
  const password: string = req.body.password;
  const status: string = 'admin';
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM users WHERE username=? password=? status=?",
      [pseudo, password, status]);
    if (pseudo === "Esteban" && password === 'koala33' && status !== "user") {
      console.log(status, "status ok");
      res.status(200).json(status);
    } else {
      res.status(401).end()
    }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
});

module.exports = router;
