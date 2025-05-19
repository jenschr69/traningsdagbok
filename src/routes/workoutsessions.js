import pool from '../helpers/database.js';
import { Router } from 'express';

const router = Router(); 

router.get('/', async(req, res) => {
    try {
        const sql = 'SELECT * FROM workoutsessions';
        const [ rows ] = await pool.query(sql);
        res.json(rows);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Database error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { workoutsession_time, workouttype_id, workout_id  } = req.body;
        const sql = 'INSERT INTO workoutsessions (workoutsession_time, workouttype_id, workout_id ) VALUES (?, ?, ?)';
        const [ result ] = await pool.query(
            sql, 
            [ workoutsession_time, workouttype_id, workout_id ]
        );
    
        res.status(201).json({
            message: 'Workoutsession created'
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Database error'});
    }

});

export default router;