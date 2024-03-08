let per=document.querySelector("#number");

let count=0;

setInterval(()=>{
if(count == 70){
 clearInterval()
}else{
    count +=1;
 per.innerHTML=`${count}%`
}


},30)