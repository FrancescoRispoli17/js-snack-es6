'use strict';

const bikes=[
    {
        bike: 'bike 1',
        peso:20,
    },
    {
        bike: 'bike 2',
        peso:15,
    },
    {
        bike: 'bike 3',
        peso:13,
    },
    {
        bike: 'bike 4',
        peso:10,
    },
    {
        bike: 'bike 5',
        peso:10,
    },
]
let leggera=bikes[0].peso;

for(let bike of bikes){
    const attuale=bike.peso;

    if(attuale<leggera)
        leggera=attuale;
}
console.log(leggera);

const bicileggere=[];
for(let bike of bikes){
    if(leggera===bike.peso)
        bicileggere.push(bike);
}
console.log(bicileggere);