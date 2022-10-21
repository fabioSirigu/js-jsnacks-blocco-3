/* Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const automobili = [
      {
            marca: 'seat',
            modello: 'leon',
            alimentazione: 'benzina'
      },
      {
            marca: 'bmw',
            modello: '420',
            alimentazione: 'diesel'
      },
      {
            marca: 'mercedes',
            modello: 'slk',
            alimentazione: 'benzina'
      },
      {
            marca: 'chevrolet',
            modello: 'matiz',
            alimentazione: 'gpl'
      },
      {
            marca: 'fiat',
            modello: 'punto',
            alimentazione: 'diesel'
      },
      {
            marca: 'tesla',
            modello: 'modelS',
            alimentazione: 'elettrico'
      },
      {
            marca: 'fiat',
            modello: '500',
            alimentazione: 'benzina'
      },
      {
            marca: 'ford',
            modello: 'puma',
            alimentazione: 'elettrico'
      },
      {
            marca: 'pagani',
            modello: 'zonda',
            alimentazione: 'benzina'
      },
      {
            marca: 'alfa romeo',
            modello: '166',
            alimentazione: 'diesel'
      },
];

console.log(automobili);

const dieselCar = automobili.filter(element => {
      if (element.alimentazione === 'diesel') {
          return true;
      }
      return false;
  
  });
  
  
  const benzCar = automobili.filter(element => {
      if (element.alimentazione === 'benzina') {
          return true;
      }
      return false;
  
  });
  
  const othersCars = automobili.filter(element => {
      if (element.alimentazione !== 'diesel' && element.alimentazione !== 'benzina') {
          return true;
      }
      return false;
  });

  console.log(dieselCar);
  console.log(benzCar);
  console.log(othersCars);