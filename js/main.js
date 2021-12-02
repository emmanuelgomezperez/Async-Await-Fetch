 //Para que apunte al elemento de html 
 let RegistrosHTML = document.getElementById('RegistrosHTML');
 let arrayRegistros = [];

//coneccion con el servidor
async function leeRegistros ()
{

    const respuesta = await fetch ("data/registros.json");
    const registros = await respuesta.json();

    return registros;
}

async function muestraRegistros ()
{
    try
    {
        arrayRegistros = await leeRegistros();
    }
    catch (e)
    {
        console.log("Error generado: "+e);

    }
    
    console.log(arrayRegistros);
    arrayRegistros.forEach(function (item, index) {
        RegistrosHTML.innerHTML = RegistrosHTML.innerHTML + item.nombre + " " + item.apellido + " " + item.telefono + "<br>";
    });

}
 muestraRegistros ();