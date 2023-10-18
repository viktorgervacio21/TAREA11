//GERVACIO HERNANDEZ VIKTOR//
//MEDODO DE ORDENAMIENTO CON BUBBLE SORT//
//DECLARAMOS LA FUNCION BUBBLE SORT
//VARIABLES (ARR,LEN,TEMP)


function bubbleSort(arr) {
    let len = arr.length;
    //COMPARAR LOS ELEMENTOS
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    //REGRESAR EL ARREGLO
    return arr;
}
//PRUEBAS
console.log(bubbleSort([3, 5, 1, 9, 2,66,50,122,55,77,7,553,1000]));