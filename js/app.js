console.log('App was loaded...');
// function printFewTime(text, times){
//     // if(times){
//     //     while(times){
//     //         console.log(text);
//     //         times--;
//     //     }
//     // }else{
//     //     console.log(text);
//     // }
//     do{
//         console.log(text);
//         times--;
//     }while(times)
// }
// printFewTime('String', 5);



// Step 1
const firstName=['Michael', 'Daniel', 'Jack', 'Stiven', 'Marta', 'Isabel', 'Anna', 'Martin', 'Edward', 'Tereza'];
const lastName=['Black', 'White', 'Gray', 'Green', 'Moron', 'Holl', 'Batler', 'Moor', 'Wilson', 'Jackson'];
let getArrayOfRandomObjects = (count) => {
    let arr=[];
    for(let i=0;i<count;i++){
        let x=Math.round(Math.random()*10);
        let y=Math.round(Math.random()*10);
        if(x>9)
            x-=1;
        if(y>9)
            y-=1;
        let obj={fullName:`${firstName[x]}\t${lastName[y]}\t`, salary: Math.round(Math.random()*5000+1000)};
        arr.push(obj);
    }
    // console.log(arr);
    return arr;
}

// Step 2
let sortSruffBySalary = (ar, howToSort) => {
    if(howToSort=='asc')
        console.log(ar.sort((a,b) => a.salary > b.salary ? 1 : -1));
    else if(howToSort=='desc')
        console.log(ar.sort((a,b) => a.salary > b.salary ? -1 : 1));
}

let sortSort=prompt('How to sort (asc or desc): ');
sortSruffBySalary(getArrayOfRandomObjects(10), sortSort);esc'