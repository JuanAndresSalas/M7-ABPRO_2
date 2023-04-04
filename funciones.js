import dotenv from "dotenv";
import pg from 'pg';
const {Pool} = pg;

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
            console.log(`Código de error: ${err.code}\n`, err.message)
        }
        else{
            
            console.table(res.rows)
        }
    })
}

export function nuevoEstudiante(consulta){
    pool.query(consulta,(error, res) =>{
       if(error){
            console.log(`Código de error: ${err.code}\n`, err.message)      
       }else{
        console.log("Estudiante ingresado con éxito")
          console.table(res.rows)
       }
   })
   pool.release
}

export function consultaEstudiante(consulta){
    pool.query(consulta,(error, res) =>{
        if(error){
            console.log(`Código de error: ${err.code}\n`, err.message)      
        }else{
            if (res.rows.length == 0) {
                console.log("Estudiante no existe")
            } else {
                console.table(res.rows)
            }
        }
    })
    pool.release
}

export  function editarEstudiante(consulta){
    pool.query(consulta,(error, res) =>{
        if(error){
            console.log(`Código de error: ${err.code}\n`, err.message) 
        }else{
          
            console.table(res.rows)
        }
    })
    
    pool.release
}

export  function eliminarEstudiante(consulta){
    pool.query(consulta,(err, res) =>{
        if(err){
            console.log(`Código de error: ${err.code}\n`, err.message) 
        }else{
            console.log("Eliminado")
            console.table(res.rows)
        }
    })
    
    pool.release
}

