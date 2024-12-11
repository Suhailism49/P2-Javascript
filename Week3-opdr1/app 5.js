var supermarktproducten = [ 
    { naam: 'melk', prijs: 1.5},
    { naam: 'brood', prijs: 2.0},
    { naam: 'eieren', prijs: 1.75},
    { naam: 'appels', prijs: 0.75},
    { naam: 'pasta', prijs: 1.2}
];

var productencontainer = document.getElementById('productencontainer');

for ( var i = 0; i < supermarktproducten.length; i++){
    var product = supermarktproducten[i];
    var productinfo = 'productnaam' + product.naam+ ', prijs: €' + product.prijs.toFixed(2);
    productencontainer.innerHTML+= productinfo + '<br>'
}