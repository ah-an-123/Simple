let back=document.getElementById("back");
let clear=document.getElementById("clear")
let userName=document.getElementsByClassName("userName")
let name=prompt("Enter Your Name Please ");
 if(name==null){
    (Array.from(userName)).forEach((element)=>{
        element.innerHTML="Unknown";
    })
 }
 else
{(Array.from(userName)).forEach((element)=>{
    element.innerHTML=name;
})}

let textArea=document.getElementById("textArea");
document.getElementById("zero").addEventListener('click',()=>{
    textArea.value=(textArea.value+0);
})

document.getElementById("one").addEventListener('click',()=>{
    textArea.value=(textArea.value+1);
})
document.getElementById("two").addEventListener('click',()=>{
    textArea.value=(textArea.value+2);
})
document.getElementById("three").addEventListener('click',()=>{
    textArea.value=(textArea.value+3);
})
document.getElementById("four").addEventListener('click',()=>{
    textArea.value=(textArea.value+4);
})
document.getElementById("five").addEventListener('click',()=>{
    textArea.value=(textArea.value+5);
})
document.getElementById("six").addEventListener('click',()=>{
    textArea.value=(textArea.value+6);
})
document.getElementById("seven").addEventListener('click',()=>{
    textArea.value=(textArea.value+7);
})
document.getElementById("eight").addEventListener('click',()=>{
    textArea.value=(textArea.value+8);
})
document.getElementById("nine").addEventListener('click',()=>{
    textArea.value=(textArea.value+9);
})
back.addEventListener('click',()=>{
let b=Array.from(textArea.value)
b.pop();
textArea.value="";
for(let i=0;i<b.length;i++){
    textArea.value=(textArea.value+b[i]);
}
})

clear.addEventListener('click',()=>{
    let b=Array.from(textArea.value)
    textArea.value="";
    })