/* eslint-disable strict */

/* 4. Remove duplicates */
function removeDuplicates(str) {
  let map = new Map();
  let newStr = '';
    
  for (let i = 0; i < str.length; i++) {
    map.set(str[i]);
  }
  for (let key of map.keys()) {
    newStr += key;
  }
  console.log(newStr);
  return newStr;
}
    
//removeDuplicates('google'); //gole
//removeDuplicates('google all that you think can think of'); //gole athyuinkcf
  

  
/////////////////////////////////////////////////////////////////////////////////  
/* 5. Any permutation a palindrome */
function palindrome(str) {
  
  const newStr = new Map();
  
  for (let i = 0; i < str.length; i++) {
    if (!newStr.delete(str[i])) {
      newStr.set(str[i], 1);
    }
  }
  
  if (newStr.size <= 1) {
    console.log(true);  
    //return true;
  } else {
    console.log(false);
    //return false;
  }
}
  
// palindrome('racecar'); //true
// palindrome('acecarr'); //true
// palindrome('north'); //false
  

  
/////////////////////////////////////////////////////////////////////////////////  
/* 6. Anagram grouping */
function anagrams(words) { 
  let map = new Map(); 
  const alphabetize = word => word.split('').sort().join('');
  
  words.forEach(word => { 
    const wordsSet = alphabetize(word); 
    const groupSet = map.get(wordsSet) || []; 
    map.set(wordsSet, [...groupSet, word]);
  });
  
  let result = Array.from(map.values());
  
  console.log(result);
  //return result;
}
  
//anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);
//[ [ 'east', 'teas', 'eats' ], [ 'cars', 'arcs' ], [ 'acre', 'race' ] ]