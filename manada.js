function Animal(){
	this.barulhos = '';
}

Animal.prototype = {
    fazerbarulho: function(){
		return this.barulhos;
	}
};

function Cachorrin() {
}

function Gatin(){
}
var GatinPrototype = new Animal();
var CachorrinPrototype = new Animal();

CachorrinPrototype.fazerBarulho = function() {
    return "Au";
}

GatinPrototype.fazerBarulho = function() {
    return "Miau";
}

Cachorrin.prototype = CachorrinPrototype;
Gatin.prototype = GatinPrototype;

function Manada(){
    this.animais = [];

    this.adicionar = function(animal) {
        this.animais.push(animal);
    };
}

Manada.prototype = {
    adicionar: function(animal){
		this.manadas.push(animal);
	},
	barulhos: function(){
		return 'Null';
	}
}

function Virgula(){
	Manada.call(this);
}

function Sustenido(){
	Manada.call(this);
}

ManadaComVirgula = new Manada();
ManadaComSustenido = new Manada();

ManadaComVirgula.barulhos = function() {
	var barulhos = '';
	for(x in animais){
		barulhos += " " + animais[x].fazerBarulho() + ',';
	};
	return barulhos;
};

ManadaComSustenido.barulhos = function() {
    var barulhos = '';
	for(i in animais){
		barulhos +=  " " + animais[i].fazerBarulho() + '# ' + animais[i].fazerBarulho() + "#";
	};
	return barulhos;
};

Virgula.prototype = ManadaComVirgula;
Sustenido.prototype = ManadaComSustenido;


var Virgula = new Virgula();
var SustenidoDuplo = new Sustenido();
var animais = [new Cachorrin(), new Gatin()];

animais.forEach(function (animal) {
      Virgula.adicionar(animal);
      SustenidoDuplo.adicionar(animal);
});

// Print Esperado: Au, Miau
console.log(Virgula.barulhos());

// Print Esperado: Au# Au# Miau# Miau
console.log(SustenidoDuplo.barulhos());
