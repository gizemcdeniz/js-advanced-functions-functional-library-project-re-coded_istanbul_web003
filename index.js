const fi = (function () {
  return   {
   libraryMethod: function () {
     return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
   },
   each: function (collection, alert) {

      for (const c in collection) {
        alert(collection[c]);
      }
      return collection;
   },
   map: function (collection, callback) {

      let array = [];
      for (const c in collection) {
        array.push(callback(collection[c]));
      }
      return array;
   },
   reduce: function (collection, callback, acc) {

      if (acc === undefined) {
        return collection.reduce(callback);
      } else {
        return collection.reduce(callback, acc);
      }
    },
    find: function (collection, predicate) {
      for (const c in collection) {
        if (predicate(collection[c]) === true) {
          return collection[c];
        }
      }
    },
    filter: function (collection, predicate) {
      const newArr = [];
      for (const c in collection) {
        if (predicate(collection[c]) === true) {
          newArr.push(collection[c]);
        }
      }
      return newArr;
    },
    size: function (collection) {
      return Object.keys(collection).length;
    },
    first: function (array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },
    last: function (array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        return array.slice(array.length - n);
      }
    },
    compact: function (array) {
      const newArr = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArr.push(array[i]);
        }
      }
      return newArr;
    },


    sortBy: function(array, callback){
      let sorted=[...array]
      return sorted.sort(function(a, b){return callback(a)-callback(b)})


    },

    flatten: function(array, shallow) {
      if(!shallow) {
        return array.flat(Infinity);
      }
      return array.flat(1);
    },

    uniq: function (array, isSorted, callback) {
      let newArr = [];
      if (callback) {
        let arr = [...array].map((element) => callback(element));
        newArr = array.filter(
          (value, index, array) => arr.indexOf(callback(value)) === index
        );
      } else {
        newArr = [...new Set(array)];
      }
      return newArr;
    },

    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },


    functions: function(obj){
      let resultArr=[]
      for(const e in obj){
        if(typeof(obj[e])==='function'){
          resultArr.push(e);
        }
      }
      return resultArr.sort();
    },
  }
})()

fi.libraryMethod()