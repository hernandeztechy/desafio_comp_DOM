//tareas por realizar
const ToDoList = 
[
    {tarea:"Compras de supermercado", categoria:"Hogar", hecho:false},
    {tarea:"Tarea JS DOM", categoria:"Educacion", hecho:true},
    {tarea:"Sacar al perro", categoria:"Hogar", hecho:false},
    {tarea:"Enviar correo a Juan", categoria:"Trabajo", hecho:false}
]

const frmTarea = document.getElementById("frmTarea")

frmTarea.onsubmit = datosForm

function datosForm(e)
{
    e.preventDefault(); //para evitar que el formulario vaya en blanco

    let datos = e.target //capturar los datos del input
    
    ToDoList.push(datos.children[0].value, datos.children[1].value)
}

function UpdateGrid()
{

}

function ChangeStatus()
{}
