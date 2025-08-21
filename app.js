_name = "Waqas Ahmad";
console.log(`Hello ${_name}!`);
const first =(data)=>{
console.log(`Here's the data you send ${data}`)
}

first(1000);

const secondfunction = (a,b)=>{
    return a + b
}
secondfunction(100,500);

function thirdfunction (a,b){
    if (!a) a= 0;
    if (!b) b = 0;
    return a * b;
}
thirdfunction(10, 20);