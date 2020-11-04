var estadoPuerta = 0;
var pisoActual = 1;
var pisosTotales = 6;

function cerrarPuerta() {
    estadoPuerta = 0;
}

function abrirPuerta() {
    estadoPuerta = 1;
}

function subirPiso() {
    if(estadoPuerta == 0)
    {
        if(pisoActual < pisosTotales)
        {
            pisoActual++;
        }
    }
}

function bajarPiso() {
    if(estadoPuerta == 0)
    {
        if(pisoActual > 0)
        {
            pisoActual--;
        }
    }
}

function irPiso(pisoDestino) {
    cerrarPuerta();
    if(pisoDestino <= pisosTotales)
    {
        if(pisoDestino > pisoActual)
        {
            for(let i=pisoActual; i<pisoDestino; i++)
            {
                subirPiso();
            }
            abrirPuerta();
        } 
        else
        {  
            while(pisoDestino < pisoActual)
            {
               bajarPiso(); 
            }  
            abrirPuerta();
        }

    }
    else
    {
        console.log("No puedes ir a un piso mayor que" , pisosTotales, "por favor revisa tu petición")
    }
}
function estado() {
    if(estadoPuerta==1)
    {
        return console.log("El piso actual es:" , pisoActual , "y la puerta esta abierta");
    }
    else
    {
        return console.log("El piso actual es:" , pisoActual , "y la puerta esta cerrada");
    }
    
}

module.exports = {
    cerrar  : cerrarPuerta,
    abrir   : abrirPuerta,
    ir      : irPiso,
    estado  : estado
};