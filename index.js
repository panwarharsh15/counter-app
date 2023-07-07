let count=document.getElementById('count')
let increement=document.getElementById('increment')
let reset=document.getElementById('reset-button')
let countvalue=0
increement.addEventListener('click',function(){
    countvalue++;
    count.innerText=countvalue;

})
reset.addEventListener('click',function(){
    countvalue=0;
    count.innerText=countvalue;
})
