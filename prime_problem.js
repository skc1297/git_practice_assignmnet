for(let i=1;i<=100;i++){

  let number= i;
let count=0;
for(let a=1; a<=number;a++){
  if(number%a==0){
    count++;
  }
}

if(count==2){
  console.log(i,"prime number");
}
}