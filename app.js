//tareas por realizar
class tareas
{
    constructor(tarea,categoria,hecho)
    {
        this.tarea = tarea;
        this.categoria =categoria;
        this.hecho = Boolean(hecho);
    }
}

const ToDoList = []

ToDoList.push(new tareas("Compras de supermercado","Hogar",false))
ToDoList.push(new tareas("Tarea JS DOM","Educacion",true))
ToDoList.push(new tareas("Sacar al perro","Hogar",false))
ToDoList.push(new tareas("Enviar correo a Juan","Trabajo",false))

window.onload = () => {UpdateGrid(ToDoList);} //para que cargue desde el inicio la tabla

const frmTarea = document.getElementById("frmTarea")
frmTarea.onsubmit = datosForm

function datosForm(e)
{
    e.preventDefault(); //para evitar que el formulario vaya en blanco

    let datos = e.target //capturar los datos del input
    
    // console.log(datos.children[1].value) txt tarea
    // console.log(datos.children[4].value) txt categoria

    ToDoList.push(new tareas(datos.children[1].value, datos.children[4].value, false))

    UpdateGrid(ToDoList); //recargar la tabla
}

function UpdateGrid(ToDoList)
{
    const tableBody = document.getElementById('tableData')
    let dataHtml = '';

    for(let data of ToDoList)
    {
        dataHtml += `<tr><td>${data.tarea}</td><td>${data.categoria}</td><td>${data.hecho}</td></tr>`
    }

    tableBody.innerHTML = dataHtml;
}
