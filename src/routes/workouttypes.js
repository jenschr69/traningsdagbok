import pool from '../helpers/database.js';
import { Router } from 'express';

const router = Router(); 

router.get('/', async(req, res) => {
    try {
        const sql = 'SELECT * FROM workouttypes';
        const [ rows ] = await pool.query(sql);
        res.json(rows);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Database error' });
    }
});

router.post('/', async (req, res)=> {
    const {workouttype_name} = req.body;

    if (!workouttype_name) {
        return res.status(400).json({ message: 'Workouttype name are required'});
    }

    try {
        const sql = 'INSERT INTO workouttypes (workouttype_name) VALUES (?)';
        const [ result ] = await pool.query(
            sql,
            [ workouttype_name ]
        );

        res.status(201).json({
            message: 'Workouttype created'
        });
    } catch (err) {
        res.status(500).json({ message: 'Database error'});
    }
});

export default router;