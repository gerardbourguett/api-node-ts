import express from 'express';
import pool from '../db/dbconnector';

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM routes');
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM routes WHERE route_id = $1', [req.params.id]);
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/agency/:agency_id', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM routes WHERE agency_id = $1', [req.params.agency_id]);
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;