// eslint-disable-next-line strict
'use strict';
function leftJoin(hashTable1, hashTable2){
  let results = [];
  if(!hashTable1 || !hashTable2) return null;
  hashTable2.map.forEach(item => {
    let key = item.head.value[0];
    // let value = item.head.value[1];
    // console.log('value()' , value);
    hashTable1.map[hashTable2.hash(key)].head.value.push(item.head.value[1]);
    results.push(hashTable1.map[hashTable2.hash(key)].head.value);
    // console.log('result' , results);
  });
  return results;
}

module.exports = leftJoin;
