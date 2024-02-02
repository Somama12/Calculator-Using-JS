let string="";
let bottons=document.querySelectorAll(".botton");
for (const a of bottons) {
    a.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            let newstring=eval(string)
            document.querySelector("input").value=newstring;
        }
        else if(e.target.innerHTML=="Clear"){
            document.querySelector("input").value="";
        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }

        
        
    })
    
}