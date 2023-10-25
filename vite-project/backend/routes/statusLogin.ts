import express, {Request, Response, NextFunction} from 'express';

const router = express.Router();
const pool = require('../dbConnection.ts');

//post
router.post('/', async(req: Request, res: Response, next: NextFunction) => {
  const pseudo = req.body.username;
  const password = req.body.password;
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM users WHERE username=?", [pseudo]);
    
    console.log(result);

    if (req.body.username === "Esteban") {
      const token: string = 'admin';
      console.log(token);
    
      res.status(200).json(token);
    } else {
      console.log(result);
      res.status(200).json(result);
    }
  } catch (err) {
    throw err;
  }
});

module.exports = router;