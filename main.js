function generarArrayBidimensional([]) {
  function generarArray([]) {
    var elementosRandom = Math.floor(Math.random() * 10);
    return [0, 1, 2];
  }
}

var array = [];
for (var i = 0; i < elementosRandom; i++) {
  array.push(generarArray());
}
return array;


var elementosRandom = Math.floor(Math.random() * 6) + 4;
var elementosArgumento = []
var elementos = [];
for (i = 0; i < elementosRandom; i++) {
  elementos[i] = elementosArgumento[i];
}
generarArrayBidimensional[elementos];


function mostrarArrayBidimensional(arrayBidimensional) {
  function mostrarArray(array) {
    array.forEach(function (elemento) {
      var formatedElemento = (" " + elemento).slice(-2);
      process.stdout.write(`| ${formatedElemento} `);
    });
    console.log("|");
  }

  function mostrarLinea() {
    for (var i = 0; i < 15; i++) {
      process.stdout.write("-");
    }
    console.log("-");
  }

  mostrarLinea();
  arrayBidimensional.forEach(function (array) {
    mostrarArray(array);
    mostrarLinea();
  });
}

mostrarArrayBidimensional(generarArrayBidimensional());

