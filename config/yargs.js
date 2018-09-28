
        const descripcion ={
            alias: 'd',
            demand :true,
            desc:'Descripcion por hacer'
        };
    
        const completado={
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        };

const argv =require('yargs')
.command('crear','crea un elemento por hacer',{descripcion})
.command('actualizar','actualizar el estado completo de una tarea',{descripcion,completado})
.command('borrar','borra una tarea',{descripcion})
.help()
.argv;
module.exports= {
    argv
}