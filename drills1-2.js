/* eslint-disable strict */
const HashMap = require('./HashMap');

/* 1. Create a HashMap class */
function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = .5;
  lotr.SIZE_RATIO = 3;
    
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandolf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log('Maiar key:', lotr.get('Maiar')); //Maiar key: Sauron
  console.log('Hobbit key:', lotr.get('Hobbit')); //Hobbit key: Frodo
  //written over due to same keys as the previous of each

  console.log(lotr);
  //capacity(before): 8, capacity(after): 24 (x3 when it hits initial capacity)
}

//main();

/*
HashMap {
  length: 9,
  _hashTable: [
    { key: 'Maiar', value: 'Sauron', DELETED: false },
    { key: 'RingBearer', value: 'Gollum', DELETED: false },
    { key: 'LadyOfLight', value: 'Galadriel', DELETED: false },
    { key: 'HalfElven', value: 'Arwen', DELETED: false },
    { key: 'Elf', value: 'Legolas', DELETED: false },
    { key: 'Hobbit', value: 'Frodo', DELETED: false },
    { key: 'Wizard', value: 'Gandolf', DELETED: false },
    { key: 'Human', value: 'Aragorn', DELETED: false },
    undefined: { key: 'Ent', value: 'Treebeard', DELETED: false }
  ],
  _capacity: 8,
  _deleted: 0,
  MAX_LOAD_RATIO: 0.5,
  SIZE_RATIO: 3
}
*/
  




/////////////////////////////////////////////////////////////////////////////////
/* 2. WhatDoesThisDo */
//sets the value of keywords to a different value being stored in hashmap
const WhatDoesThisDo = function() {
  let str1 = 'Hello World.'; 
  let str2 = 'Hello World.';
  
  let map1 = new HashMap(); 

  map1.set(str1,10); // -> key: 'Hello World.', value: 10
  map1.set(str2,20); // -> key: 'Hello World.', value: 20 
  //console.log(map1);

  let map2 = new HashMap();
  
  let str3 = str1; 
  let str4 = str2; 

  map2.set(str3,20); // key: 'Hello World.', value: 20
  map2.set(str4,10); // key: 'Hello World.', value: 10
  //console.log(map2);
  
  console.log(map1.get(str1)); //20
  console.log(map2.get(str3)); //10
};
  
//WhatDoesThisDo();