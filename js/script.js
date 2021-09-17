let a = 5;

const obj = {
    a: 1,
    b: 'Hallow World',
    c: true
};


const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

arr.forEach(function(item, index, arr){
        console.log(`${item}  ${index}`);
});

const obj1 = {
    
    a: 1,
    b: 'hellow',
    c: true,
    d: {
        e: 'second object name',
        f: 'some text second object'
    }
};

console.log(Object.keys(obj1));

console.log(obj.b);