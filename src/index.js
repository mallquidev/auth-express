import app from './app.js'
import {checkConnection} from './db.js'
import { PORT } from "./config.js";

checkConnection()

app.listen(PORT)

console.log('Server is running on port', PORT)
