import express from 'express';
import pool from '../db/dbconnector';

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM trips');
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/:route_id', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM trips WHERE route_id = $1', [_req.params.route_id]);
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/:route_id/:service_id', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM trips WHERE route_id = $1 AND service_id = $2', [_req.params.route_id, _req.params.service_id]);
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/:route_id/:service_id/:direction_id', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM trips WHERE route_id = $1 AND service_id = $2 AND direction_id = $3', [_req.params.route_id, _req.params.service_id, _req.params.direction_id]);
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;