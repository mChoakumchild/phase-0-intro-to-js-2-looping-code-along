
function writeCards(name,sup) {
    const a = [];
    for (let i = 0; i < name.length; i++){
        a.push(`Thank you, ${name[i]}, for the wonderful ${sup} gift!`);
    }
    return a;
}

function countDown(num){
    let i = 0;
    while(i<=num){
        var dis = num-i;
        console.log(dis);
        i++; 
    }
}