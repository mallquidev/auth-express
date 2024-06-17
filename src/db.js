import {createPool} from 'mysql2/promise'

const pool = createPool({
    host: "localhost",
    port: 3306,
    database: "crudreact",
    user: "root",
    password: ""
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