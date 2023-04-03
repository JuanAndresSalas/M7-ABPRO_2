import dotenv from "dotenv";
import pkg from 'pg';
const {Pool} = pkg;

dotenv.config()


const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000
})



export  function estudiantesRegistrados(consulta){
    
                
    pool.query(consulta, (err, res) =>{
        if(err){
            console.log(err)
        }
        else{
            console.table(res.rows)
        }
    })
    
    
}
