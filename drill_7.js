/* eslint-disable strict */

/* 7. Separate Chaining */
/* Write another hash map implementation as above, 
but use separate chaining as the collision resolution mechanism.

Test your hash map with the same values from the lotr hash map. */

class HashMapSep {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
    this.MAX_LOAD_RATIO = 0.5;
    this.SIZE_RATIO = 3;
  }
    
  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      //throw new Error('Key error')
      return;
    } else {
      let currNode = this._hashTable[index];
      let result = [];
  
      while (currNode !== null) {
        if (currNode.key === key) {
          result.push(currNode.value);
        }
        currNode = currNode.next;
      }
  
      return result;
    }
  }
  
  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > this.MAX_LOAD_RATIO) {
      this._resize(this._capacity * this.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    let currNode = this._hashTable[index];
  
    const newNode = {
      key,
      value,
      next: null
    };
  
    if (currNode === undefined) {
      this._hashTable[index] = newNode;
  
      this.length++;
    } else {
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
  
      currNode.next = newNode;
      this.length++;
    }
  }
  
  delete(key) {
    const index = this._findSlot(key);
    let x = this._hashTable[index];
    if (x === undefined) {
      throw new Error('Key error');
    }
      
    while(x !== undefined && x.key === key) {
      x = (x.next === null ? undefined : x.next);
      this.length--;
    }
  
    if(x === undefined) {
      this._hashTable[index] = x;
      return;
    }
  
    let currNode = x;
    let prevNode = x;
  
    while(currNode !== null) {
      if(currNode.key === key) {
        prevNode.next = currNode.next;
        this.length--;
      }
  
      prevNode = currNode;
      currNode = currNode.next;
    }
  
    this._hashTable[index] = x;
  }
  
  _findSlot(key) {
    const hash = HashMapSep._hashString(key);
    return hash % this._capacity;
  
  }
  
  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];
  
    for (let slot of oldSlots) {
      if (slot !== undefined) {
        while(slot !== null) {
          this.set(slot.key, slot.value);
          slot = slot.next;
        }
      }
    }
  }
  
  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure has is unsigned - meaning non-negtive number.
    return hash >>> 0;
  }
}
  
module.exports = HashMapSep;

//////////////////////////////////////////////////////
  
const lotr = new HashMapSep();
  
lotr.set('Hobbit', 'Bilbo');
lotr.set('Hobbit', 'Frodo');
lotr.set('Wizard', 'Gandolf');
lotr.set('Human', 'Aragon');
lotr.set('Elf', 'Legolas');
lotr.set('Maiar', 'The Necromancer');
lotr.set('Maiar', 'Sauron');
lotr.set('RingBearer', 'Gollum');
lotr.set('LadyOfLight', 'Galadriel');
lotr.set('HalfElven', 'Arwen');
lotr.set('Ent', 'Treebeard');
    
// lotr.delete('Maiar');
// lotr.delete('Human');

console.log(lotr);
console.log(lotr.get('Hobbit'));
console.log(lotr.get('Maiar'));


/*
HashMapSep {
  length: 11,
  _hashTable: [
    <2 empty items>,
    { key: 'HalfElven', value: 'Arwen', next: null },
    <1 empty item>,
    { key: 'LadyOfLight', value: 'Galadriel', next: null },
    <1 empty item>,
    { key: 'Wizard', value: 'Gandolf', next: [Object] },
    <5 empty items>,
    { key: 'Elf', value: 'Legolas', next: null },
    { key: 'Hobbit', value: 'Bilbo', next: [Object] },
    <6 empty items>,
    { key: 'Ent', value: 'Treebeard', next: null },
    <1 empty item>,
    { key: 'Human', value: 'Aragon', next: null },
    { key: 'Maiar', value: 'The Necromancer', next: [Object] }
  ],
  _capacity: 24,
  _deleted: 0,
  MAX_LOAD_RATIO: 0.5,
  SIZE_RATIO: 3
}
[ 'Bilbo', 'Frodo' ]
[ 'The Necromancer', 'Sauron' ]
*/
  
