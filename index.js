import { estudiantesRegistrados } from "./funciones.js"


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
        if (datos.length == 4) {
            try{
                parseInt(datos[3])
                nuevoEstudiante(datos)
            }catch(error){
                console.log(error)
            }
        }else{
            console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 4\nParámetros ingresados: ${datos.length}`)
        }
        break;
    case "registrados":
        consulta.name = "estudiantes-registrados"
        consulta.text = "SELECT * FROM etudiante"
        if(argumentos.length == 0){
            try{
                estudiantesRegistrados(consulta)
            }catch(error){
                console.log(error.code)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 0\nParámetros ingresados: ${datos.length}`))
        }
        break; 
    case "consultar":
        if(datos.length == 1){
            try{
                
                estudiante(datos)
                
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${datos.length}`))
        }
        break;
    case "actualizar":
        if(datos.length == 4){
            try{
                parseInt(datos[3])
                editarEstudiante(datos)
                
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${datos.length}`))
        }
        break;
    case "eliminar":
        if(datos.length == 1){
            try{
                eliminarEstudiante(datos)
            }catch(error){
                console.log(error)
            } 
        }else{
            console.log(console.log(`Cantidad erronea de parámetros\nParámetros necesarios: 1\nParámetros ingresados: ${datos.length}`))
        }
        break;
    default:
    console.log(`Función ${accion} no existe`)
    break;
}



