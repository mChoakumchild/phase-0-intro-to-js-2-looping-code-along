
//function writeCards(name,sup) {
 //   const a = [];
  //  for (let i = 0; i < name.length; i++){
 //       a.push(`Thank you, ${name[i]}, for the wonderful ${sup} gift!`);
//    }
 //   return a;
//}

function countDown(num){
    let i = 0;
    while(i<=num){
        let dis = num-i;
        console.log(dis);
        i++; 
    }
}




function writeCards(a,b) {
const c = [];
    for( let i = 0; i < a.length; i++) {
        c.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`)
    }
return c

}