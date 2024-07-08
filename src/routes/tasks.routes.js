import {Router} from 'express'
import {createTasks, deleteTasks, getTask, getTasks, updateTasks} from '../controllers/tasks.controllers.js'

const router = Router()

router.get('/tasks', getTask)
router.get('/tasks', getTasks)
router.post('/tasks', createTasks)
router.put('/tasks', updateTasks)
router.delete('/tasks', deleteTasks)

export default router;