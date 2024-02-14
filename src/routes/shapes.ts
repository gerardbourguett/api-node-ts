import express from 'express';
import pool from '../db/dbconnector';

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM shapes');
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/:shape_id', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM shapes WHERE shape_id = $1', [_req.params.shape_id]);
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

router.get('/shapes/:route_id/:service_id', async (_req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT sh.shape_pt_sequence, tr.route_id, tr.service_id, tr.trip_headsign, tr.direction_id, sh.shape_id, sh.shape_pt_lat, sh.shape_pt_lon FROM (SELECT DISTINCT ON (tr.shape_id) * FROM trips AS tr WHERE tr.route_id = $1 AND tr.service_id = $2) AS tr JOIN shapes AS sh ON sh.shape_id = tr.shape_id;', [_req.params.route_id, _req.params.service_id]);
        client.release();
        res.json(result.rows); // Enviar los datos como JSON
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;