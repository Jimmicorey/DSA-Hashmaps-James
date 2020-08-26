/* eslint-disable strict */
const HashMap = require('./drill_1');

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

  map2.set(str3,20); 
  // key: 'Hello World.', value: 20

  map2.set(str4,10); 
  // key: 'Hello World.', value: 10
  
  //console.log(map2);
  
  console.log(map1.get(str1)); //20
  console.log(map2.get(str3)); //10
};
  
WhatDoesThisDo();