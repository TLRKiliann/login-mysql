import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();
const pool = require('../dbConnection.ts');

// post
router.post('/', async(req: Request, res: Response, next: NextFunction) => {
  const pseudo = req.body.username;
  const password = req.body.password;
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM users WHERE username=?", [pseudo, password]);
    if (pseudo === "Esteban" && password === "koala33") {
      const token: string = 'admin';
      console.log(token, "token ok");
      res.status(200).json(token);
    } else {
      res.status(200).end()
    }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
});

module.exports = router;
