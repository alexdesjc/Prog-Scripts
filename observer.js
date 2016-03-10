function Observer() {

	var lista = [];
	var observer = {};
  var contador = 0;
  
	observer.adicionarOuvinte = function (o) {
		lista.push(o);
	};
    function execEvento() {
        for (var x = 0; x < lista.length; x++) {
            var aux = lista[x];
            aux();
        }
    }
	
	function incrementar(){
		++contador;	
		return contador;
	}
	
	observer.incrementar = incrementar;
    observer.execEvento = execEvento;
	return observer
}

var ob = Observer();

function letraA() {
    console.log("A");
};
function letraB() {
    console.log("B");
};
function letraC() {
    console.log("C");
};

ob.adicionarOuvinte(letraA);
ob.adicionarOuvinte(letraB);
ob.adicionarOuvinte(letraC);
console.log(ob.incrementar());
console.log(ob.incrementar());
console.log(ob.incrementar());
ob.execEvento();
