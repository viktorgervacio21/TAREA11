//GERVACIO HERNANDEZ VIKTOR//
//MEDODO DE ORDENAMIENTO CON SELECTION SORT//
//DECLARAMOS LA FUNCION SELECTION SORT
//VARIABLES (ARR,MININDEX=NUMERO A ORDENAR,TEMP)


function selectionSort(arr) {
    let n = arr.length;
   //COMPARACIONES
    for (let i = 0; i < n - 1; i++) {
       let minIndex = i;
   
       for (let j = i + 1; j < n; j++) {
         if (arr[j] < arr[minIndex]) {
           minIndex = j;
         }
       }
   
       if (minIndex !== i) {
         let temp = arr[i];
         arr[i] = arr[minIndex];
         arr[minIndex] = temp;
       }
    }
   //REGRESAR ARREGLOS
    return arr;
   }
   //PRUEBAS OR
   let arr = [64, 34, 25, 12, 22, 11, 90];
   console.log("Prueba Original: ", arr);
   console.log("Con ordenamiento Sorted: ", selectionSort(arr));