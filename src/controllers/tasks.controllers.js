import {pool} from '../db.js'

export const createTasks = async(req, res) => {
    try {
        const {title, description} = req.body
        const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES(?,?)', [title, description])
        res.json(result)
        console.log(result)
    } catch (error) {
        res.status(500).json({message: 'Error creating tasks'})
    }
}

export const getTasks = async(req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM tasks')
        if(result.length === 0) return res.status(404).json({message: 'no hay ninguna tarea'})
        return res.json(result)
    } catch (error) {
        res.status(500).json({message: 'Error when searching for all tasks'})
    }
}
export const getTask = async(req, res) => {
    try {
        const [taskFound] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]) 
        if(taskFound.length === 0) return res.status(404).json({message: "Tasks Not Found"})
        return res.json(taskFound[0])
    } catch (error) {
        res.status(500).json({message: 'Error when searching for tasks'})
    }
}
export const updateTasks = async(req, res) => {
    try {
        const [result] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [req.body, req.params.id])
        if(result.affectedRows === 0) return res.status(404).json({message: "Not Found task and not update"})
        return res.sendStatus(204)
    } catch (error) {
        res.status(500).json({message: 'Error when updating tasks'})
    }
}
export const deleteTasks = async(req, res) => {
    try {
        const id = req.params.id
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id])
        if(result.affectedRows === 0) return res.status(404).json({message: "Tasks Not Found"})
        return res.json(result)
    } catch (error) {
        res.status(500).json({message: 'Error when deleting tasks'})
    }
}

