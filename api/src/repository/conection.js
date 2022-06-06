import MYSQL from 'mysql2/promise'
const con = await MYSQL.createConnection(){
    host:PROCESS.env.MYSQL_HOST,
    user:PROCESS.env.mysql_user,
    password:process.env.mysql_pwb
    databse:process.env.mysql_db


}