function filter(nos,criteria){
  var result = [];
  for(var index in nos){
    if (criteria(nos[index]))
      result.push(nos[index]);
  }
  return result;
}

function sort(numbers,comparer){
 for(var i=0;i<numbers.length-1;i++)
   for(var j=i+1;j<numbers.length;j++){
      var left = numbers[i], right = numbers[j], temp;
      if (comparer(left,right) > 0){
        //Swapping logic
        temp = left;
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
 }
}

function groupBy(list, keySelector){
  var result = [];
  function getKeyedItem(key){
     for(var m in result){
       if (result[m].key == key)
          return result[m];
     }
     var newKeyedItem = { key : key, value : [] };
     result.push(newKeyedItem);
     return newKeyedItem;
  } 
  for(var member in list){
    var item = list[member];
    var key = item[keySelector];
    var keyedItem = getKeyedItem(key);
    keyedItem.value.push(item);
  }
  return result;
} 

function groupBy(list, keySelector){
  var result = {};
  for(var member in list){
    var item = list[member];
    var key = item[keySelector];
    if (typeof result[key] === "undefined") result[key] = [];
    result[key].push(item);
  }
  return result;
}



var employees = [
	{id : 21, name : "magesh", salary : 10000, deptno : 1},
	{id : 51, name : "suresh", salary : 20000, deptno : 2},
	{id : 71, name : "ganesh", salary : 80000, deptno : 1},
	{id : 11, name : "rajesh", salary : 70000, deptno : 2},
	{id : 10, name : "ramesh", salary : 60000, deptno : 1}
]
