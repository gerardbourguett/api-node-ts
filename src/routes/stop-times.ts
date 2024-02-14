import express from 'express';
import pool from '../db/dbconnector';

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM stop_times');
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;