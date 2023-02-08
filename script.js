let back=document.getElementById("back");
let clear=document.getElementById("clear")
let userName=document.getElementsByClassName("userName")
let btn=document.getElementsByClassName("btn")
let arr=[];
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
    textArea.value=(textArea.value+"a");
})

document.getElementById("one").addEventListener('click',()=>{
    textArea.value=(textArea.value+"b");
})
document.getElementById("two").addEventListener('click',()=>{
    textArea.value=(textArea.value+"c");
})
document.getElementById("three").addEventListener('click',()=>{
    textArea.value=(textArea.value+"d");
})
document.getElementById("four").addEventListener('click',()=>{
    textArea.value=(textArea.value+"e");
})
document.getElementById("five").addEventListener('click',()=>{
    textArea.value=(textArea.value+"f");
})
document.getElementById("six").addEventListener('click',()=>{
    textArea.value=(textArea.value+"g");
})
document.getElementById("seven").addEventListener('click',()=>{
    textArea.value=(textArea.value+"h");
})
document.getElementById("eight").addEventListener('click',()=>{
    textArea.value=(textArea.value+"i");
})
document.getElementById("nine").addEventListener('click',()=>{
    textArea.value=(textArea.value+"j");
})
document.getElementById("k").addEventListener('click',()=>{
    textArea.value=(textArea.value+"k");
})
document.getElementById("l").addEventListener('click',()=>{
    textArea.value=(textArea.value+"l");
})
document.getElementById("m").addEventListener('click',()=>{
    textArea.value=(textArea.value+"m");
})
document.getElementById("n").addEventListener('click',()=>{
    textArea.value=(textArea.value+"n");
})
document.getElementById("o").addEventListener('click',()=>{
    textArea.value=(textArea.value+"o");
})
document.getElementById("t").addEventListener('click',()=>{
    textArea.value=(textArea.value+"t");
})
document.getElementById("s").addEventListener('click',()=>{
    textArea.value=(textArea.value+"s");
})
document.getElementById("r").addEventListener('click',()=>{
    textArea.value=(textArea.value+"r");
})
document.getElementById("q").addEventListener('click',()=>{
    textArea.value=(textArea.value+"q");
})
document.getElementById("p").addEventListener('click',()=>{
    textArea.value=(textArea.value+"p");
})
document.getElementById("u").addEventListener('click',()=>{
    textArea.value=(textArea.value+"u");
})

document.getElementById("v").addEventListener('click',()=>{
    textArea.value=(textArea.value+"v");
})

document.getElementById("w").addEventListener('click',()=>{
    textArea.value=(textArea.value+"w");
})
document.getElementById("x").addEventListener('click',()=>{
    textArea.value=(textArea.value+"x");
})
document.getElementById("y").addEventListener('click',()=>{
    textArea.value=(textArea.value+"y");
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


let up=document.getElementById("UpperCase")

    up.addEventListener('click',()=>{
        let u=textArea.value.toString()
        textArea.value=u.toUpperCase();
    })

    let lo=document.getElementById("LowerCase")

    lo.addEventListener('click',()=>{
        let u=textArea.value.toString()
        textArea.value=u.toLowerCase();
    })
