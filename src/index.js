/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let mass = [];
  let test = true;
  for (let i = 0; i < preferences.length; i++){
    for (let j = 0; j < mass.length; j++){
      if(i == mass[j]) test=false;
    }
    if(preferences[preferences[preferences[i]-1]-1] == i+1 & test & preferences[i]-1 != i) {
      mass.push(i);
      mass.push(preferences[i]-1);
      mass.push(preferences[preferences[i]-1]-1);
      count++;
    }
    test = true;
  }
  return count;
};
