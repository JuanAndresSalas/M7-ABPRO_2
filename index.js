import { estudiantesRegistrados, nuevoEstudiante, consultaEstudiante, editarEstudiante, eliminarEstudiante } from "./funciones.js"


const datos = process.argv.splice(2)

const accion = datos[0]

const argumentos = datos.splice(1)



let consulta = {
    name: "",
    text: "",
    values:[]
}


switch (accion) {
    case "nuevo":
        if (argumentos.length == 4) {
            try{
                consulta.name = "nuevo"
                consulta.text = "insert into  estudiante(nombre,rut,curso,nivel) values($1,$2,$3,$4) RETURNING *;"
                parseInt(argumentos[3])
                consulta.values = argumentos
                nuevoEstudiante(consulta)
            }catch(error){
                console.log(error)
            }
        }else{
            console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 4\nParámetros ingresados: ${argumentos.length}`)
        }
        break;
    case "registrados":
        consulta.name = "estudiantes-registrados"
        consulta.text = "SELECT * FROM etudiante"
        if(argumentos.length == 0){
            try{
                estudiantesRegistrados(consulta)
            }catch(error){
                console.log(error.messege)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 0\nParámetros ingresados: ${argumentos.length}`))
        }
        break; 
    case "consultar":
        if(argumentos.length == 1){
            try{
                consulta.name = "consultar-estudiante"
                consulta.text= `select * from estudiante where rut like $1`
                consulta.values = argumentos
                consultaEstudiante(consulta)
                
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${argumentos.length}`))
        }
        break;
    case "actualizar":
        if(argumentos.length == 4){
            try{
                parseInt(argumentos[3])
                consulta.name = "actualizar"
                consulta.text = "UPDATE estudiante SET curso = $3, nivel = $4 WHERE rut like $2 or nombre like $1 returning *;"
                consulta.values = argumentos
                editarEstudiante(consulta)
                
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${argumentos.length}`))
        }
        break;
    case "eliminar":
        if(argumentos.length == 1){
            try{
                consulta.name = "eliminar"
                consulta.text = `DELETE FROM estudiante WHERE rut like $1 RETURNING *;`
                consulta.values = argumentos
                eliminarEstudiante(consulta)
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${argumentos.length}`))
        }
        break;
    default:
    console.log(`Función ${accion} no existe`)
    break;
}



