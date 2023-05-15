// What is the Big O of the below function? (Hint, you may want to go line by line)


// function funChallenge(input) {
//   let a = 10;// O(1)
//   a = 50 + 3;// O(1)

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction();//O(n)
//     let stranger = true; //O(n)
//     a++;
//   }
//   return a;// O(1)
// }



// memory complexcity


const boo=(arr)=>{
  for (let i=0; i<arr.length; i++){
    console.log('Booo')
  }
}

boo([1,3,5,6,7,8,8])// O(1)


const hi=(n)=>{
  const arry=[];// IN here we creating new data strucure ,Let I equal zero space and instead this becomes O of n because we're creating a new data structure and adding memory.So each item is an additional memory space on our computers and times.
  for (let i=0; i<n; i++){
    arry[i]='hi';
  }
  console.log(arry);
}

hi(6); //O(n)