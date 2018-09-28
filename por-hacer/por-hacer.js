const fs =  require('fs');
let listadoPorHacer = []

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) 
           throw new Error('No se puede grabar alv', err);
    });
}
const cargaDB = () =>{
    try{
        listadoPorHacer = require('../db/data.json');
    } catch (error){
        listadoPorHacer=[]

    }
    // console.log(listadoPorHacer);
}
    const crear = (descripcion)=>{
        cargaDB();
        let porHacer = {
            descripcion,
            completado:false
        };

        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
    }

    const getListado = () => {
        cargaDB();
        return listadoPorHacer;
    }

    const actualizar = (descripcion, completado = true)=>{
        cargaDB();

        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
            //console.log(index)
            if ( index >= 0) {
                listadoPorHacer[index].completado= completado;
                guardarDB();
                return true;
            }
            else {
                return false;
            }
    }

    const borrar = (descripcion) =>{
        cargaDB();

        let index = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
            //console.log(index)
            if ( listadoPorHacer.length===index.length) {
                return false;
            }
            else {
                listadoPorHacer=index;
                guardarDB();
                return true;
                
            }
    }

    module.exports = {
        crear,
        getListado,
        actualizar,
        borrar,
    }
