
//se ingresa el nombre del alumno
let nombreAlumno = "";


do {
    //pido por prompt el nombre del alumno
    nombreAlumno = prompt("ingrese el nombre del alumno, no escriba nada para salir");
    
    if (nombreAlumno != "")
    {
    //llamo a la funcion que me calcula el promedio    
    let promedio = calculadoraPromedio();
    
    //llamo a la funcion que me imprime el promedio del alumno
    imprimirPromedio (nombreAlumno, promedio);
    }
} while (nombreAlumno!= "");

//funcion para calcular el promedio
function calculadoraPromedio() {
    //creo las variables necesarias para el calculo del promedio

    let cantidadNotasIngresadas = 0;
    let promedio = 0;
    let nota = 0;
    let total = 0;

    do {
        nota = parseFloat(prompt("ingrese la nota, 0 para salir"));

        while (nota >10)
        {
        nota = parseFloat(prompt("ingrese nuevamente la nota, debe ser menor o igual a 10"));
        }

        // nos aseguramos que la nota sea distinta de 0 y menor o igual a 10
        if(nota != 0 && nota <= 10)
        {
        cantidadNotasIngresadas ++;
        total += nota;
        }

        //este if y else son para que no me imprima luego el NaN de la division de 0/0
        if(total && cantidadNotasIngresadas != 0)
        {   
        promedio = total / cantidadNotasIngresadas;
        }
        else {promedio = 0}; 

    } while (nota != 0);   

    //devuelvo el promedio
    return promedio;
}

//funcion para imprimir el promedio
function imprimirPromedio (nombreAlumno,promedio)
{
    alert ("el promedio de " + nombreAlumno + " es " + promedio);
}