import MYSQL from 'mysql2/promise'

const con = await MYSQL.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_user,
    password:process.env.MYSQL_pwb,
    databse:process.env.MYSQL_db
})
export {con}

