let array1 = [
    {"name": "John","surname":"Doe","age":25},
    {"name": "Rihanna","surname":"Smith","age":26},
    {"name": "Eminem","surname":"Jones","age":28},
    {"name": "John","surname":"Doe","age":78},
    {"name": "John","surname":"Doe","age":36},
    {"name": "John","surname":"Doe","age":12},
]

let array2 = [
    1,2,3
]
let array3 = [
    1,2,3,4,5,6,[[[7,8]]],"9","10"
]

// Array methodds

//#1 - Concat
Array.prototype.myconcat = function (array) {
    for(let i = 0; i < array.length; i++){
        this.push(array[i]);
    }
    return this;
  };
console.log(array2.concat(array1))

//#2 - Fill
function myfill(array, value, startIndex = 0, endIndex = array.length) {
    for (let index = startIndex; index <= endIndex; index += 1) {
      array[index] = value;
    }
   
    return array;
   }
console.log(myfill(array2,20), 'Fill')

//#3 - Find
Array.prototype.myfind = function (arg) {
    for(let i = 0; i < this.length; i++){
        if(arg(this[i]))
        {
            return this[i];
        }
    }
    return undefined
  };
let newArray = array1.myfind(item => item.name === 'John')
console.log(newArray)

//#4 - findindex
Array.prototype.myfindIndex = function (arg) {
    for(let i = 0; i < this.length; i++){
        if(arg(this[i]))
        {
            return i;
        }
    }

    return -1;
  };
let findIndexArray = array1.myfindIndex(item => item.name === "Eminem")
console.log(findIndexArray)

//#5 - map
Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}
array1.mymap(item => {
    if(item.age > 12){
        // console.log(item)
    }
})

//#6 - flat
Array.prototype.flatten = function() {
    var ret = [];
    for(var i = 0; i < this.length; i++) {
        if(Array.isArray(this[i])) {
            ret = ret.concat(this[i].flatten());
        } else {
            ret.push(this[i]);
        }
    }
    return ret;
};
console.log(array3.flatten(1), 'rrrrrrrrrrrrrrrr');

//#7 - reduce
Array.prototype.myreduce = function (arg, val) {
    let res = val;
    let i =0;
    if(val)
    {
        res = val;
    }
    else
    {
        res = this[0];
        i=1;
    }
    for(i; i < this.length; i++){
       res = arg(res, this[i]);
     }

     return res;
  };
    let arr = [1,2,3]
    const sum = arr.myreduce((total, amount) => total + amount);
    console.log(sum,"kkkkkkkkk")


    // unique items
    let a = [1,2,3,55,5]

    function onlyUnique(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
              return false;
            }
          }
        }
        return true;
      }
    console.log(onlyUnique(a))


    // isogram
    let isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);
    console.log(isIsogram("ad 2"))

    
    //lodash


    // intersect
    function intersect(a, b) {
        let setB = new Set(b);
        return [...new Set(a)].filter(x => setB.has(x));
    }
    console.log(intersect(a,arr))

    //pull
    let b = ["a","a","b"]
    function pull(arr, values) {
        for(let i = 0; i < values.length; i++)
        {
            while(arr.indexOf(values[i]) !== -1)
            {
                let index = arr.indexOf(values[i]);
                arr.splice(index, 1);
            }
        }
        return arr;
    }
    console.log(pull(b,"a"))

    //tail
    let c = [1,2,3]
    const tail = (array) =>{
        let t = [];
        for(let i = 1; i < array.length; i++)
        {
            t.push(array[i]);
        }    
        return t;
    }
    console.log(tail(c))
    
    //take

    const take = (array,take) =>{
        let arr = [];
        if(take > array.length)
        {
            take = array.length;
        }
        if(take < 0)
        {
            take = 0;
        }
        for(let i = 0; i< take; i++)
        {
            arr.push(array[i]);
        }
        return arr;
      }
      let d = [1,2,3]
    console.log(take(d,0))