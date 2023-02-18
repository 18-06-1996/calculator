function clicking(event){
event.innerText
parent=document.querySelector('#result')
operator=['+','-','*','/']
 if (!(operator.includes(parent.innerText.slice(-1))&&(operator.includes(event.innerText)))){
    parent.value=parent.value+event.innerText
 console.log(parent.innerText)

}}
function evaluation(eve){
    opea=['=']
    if(opea.includes(eve.innerText)){
        parent1=document.querySelector('#result')
        var out= eval(parent1.value)
        res=document.querySelector('.ans')
        res.innerText=out
    }
console.log(out)
}

btn=document.querySelector('#clear')
btn.addEventListener('click',()=>{
    parent=document.querySelector('#result')
    display=document.querySelector('.ans')
parent.value=''
display.innerText=''
})

// erase=document.querySelector('#back')
// erase.addEventListener('click',()=>{
//     parent=document.querySelector('#result')
 
// parent.innerText=
// })

window.document.addEventListener('keypress',(event)=>{
    operator=['+','-','*','/']
    key=event.key
    code=event.code
    if(code.includes('Digit')||operator.includes(key)){
        parent=document.querySelector('#result')
parent.value=parent.value+key
console.log(parent.value)
console.log('key is pressed')
    }

  if(key =='='){
     parent=document.querySelector('#result')
     var out=eval(parent.value)
     res=document.querySelector('.ans')
     res.innerText=out

  }

 

})