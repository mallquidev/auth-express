import app from './app.js'
import {checkConnection} from './db.js'

checkConnection()

app.listen(3000)

console.log('Server is running on port 3000')