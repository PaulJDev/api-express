const fs = require('fs')
const JSON_PATH = './src/database/db.json'

const saveToDatabase = (DB) => {
    fs.writeFileSync(JSON_PATH, JSON.stringify(DB, null, 2), { encoding: 'utf-8' })
    return;
}


module.exports = { saveToDatabase }