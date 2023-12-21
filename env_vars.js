require('dotenv').config()

const MNGDB_KEY = process.env.MNGDB_KEY
const PORT = process.env.PORT
const SECRET = process.env.SECRET

module.exports = {
  MNGDB_KEY,
  PORT, SECRET
}