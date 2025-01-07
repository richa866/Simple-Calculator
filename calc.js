
let mode = document.querySelector("#mode");
let wrapper= document.querySelector(".wrapper");
let steps=document.querySelector(".calcSteps");
let ans=document.querySelector(".answer");
let keys=document.querySelectorAll(".key");
let functionKey=document.querySelector("#function");

let currentMode= "dark";
let symbol= document.createElement("i");
symbol.classList.add("changedMode");
mode.appendChild(symbol);
mode.addEventListener("click",()=>{

    if(currentMode==="dark"){
     wrapper.style.backgroundColor="white"; 
     symbol.className="changedMode fa-solid fa-moon";
     currentMode="bright";
     console.log("mode changed to bright");
     symbol.style.color="rgb(2, 2, 37)";
     lightModeStyling(); 
    }

    else{
    wrapper.style.backgroundColor="rgb(2, 2, 37)"; 
    currentMode="dark";
    ans.style.color="white";
    steps.style.color="white";
    steps.style.border="2px solid rgb(2, 2, 37) ";
    ans.style.border="2px solid rgb(2, 2, 37)";
    console.log("mode changed to dark");
    }
})


 let str="";
let step="";
let arr= Array.from(keys);
arr.forEach(key => {
    key.addEventListener("click",(e)=>{
        
        keyValue=e.target.textContent;
        console.log("Clicked Key:", keyValue); 
        console.log("Current str:", str); 

        if(keyValue =="="){
            steps.value=str;
            str=eval(str).toString();
            console.log("Current str:", str); 
            ans.value=str;
        }
        else if(keyValue=="AC"){
            str="";
            step="";
            console.log("Current str:", str); 
            ans.value=str;
            steps.value=str;
        }
        else if(keyValue=="DEL"){
            str=str.substring(0,str.length-1);
            console.log("Current str:", str); 
            ans.value=str;
        }
        else{
            str += keyValue;
            console.log("current steps=",step);
            console.log("Current str:", str); 
            ans.value=str; 
        }  
    })  
});

 const lightModeStyling=()=>{
    steps.style.border="2px solid white";
    ans.style.border="2px solid white";
    ans.style.color="rgb(2, 2, 37)";
    steps.style.color="rgb(2, 2, 37)";
    arr.forEach(key=>{
         if(key.id=="function"){
            key.style.color= "yellow";
            key.style.backgroundColor=" rgba(36, 35, 35, 0.614)";
            key.style.fontWeight="bolder" ;
            key.style.boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px";  
         }
         else{
            if(key.classList.contains("key")){
                key.style.backgroundColor="rgb(2, 2, 37,0.814)";
            } 
         }
    }) 
 }


 