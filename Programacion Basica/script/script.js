const persona = {

    nombre: 'Walberto',
    edad: 30,
    id: 1,
    nombreCompleto: function() {
        return `${this.nombre} ${this.edad}`;
    },
}


const miArray = [4, 2, 3, 'tico', { nombre: 'anya' }];
//Java Script Objet Notacion JSON

var iterado = miArray[Symbol.iterator]();

miArray.push(33);