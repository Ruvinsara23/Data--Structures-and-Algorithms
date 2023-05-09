//Big O notation

//O(n)-Liner time 

console.log('Hello');
const arr=['nemo'];

function findNemo(array){
   for(let i=0; i<array.length; i++){
    if (array[i]==='nemo'){
        console.log(array[i]);
    }
    else{
        console.log(array[i]);
    } 
   }
}

findNemo(arr);

// O(1)=const time 

// No matter how many  inputs are only run certain number of operation
const boxes=[1,2,4,6,78,7];

const logFirstTwoBoxes=(boxes)=>{
    console.log(boxes[0]);//0(1)
    console.log(boxes[2]);//0(2)
}

logFirstTwoBoxes(boxes);


