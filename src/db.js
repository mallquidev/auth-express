import {createPool} from 'mysql2/promise'
import {HOST, PORTDB, DATABASE, PASSWORD, USER} from './config.js'

const pool = createPool({
    host: HOST,
    port: PORTDB,
    database: DATABASE,
    user: USER,
    password: PASSWORD
})

async function checkConnection() {
    try {
        const connection = await pool.getConnection()
        await connection.query('SELECT 1');
        connection.release()
        console.log('DB is CONNECT ')
    } catch (error) {
        console.error('Error en la BD!!!!!', error.message);
    }
}

export {pool, checkConnection};