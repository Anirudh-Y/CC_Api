import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
const Scrolling = ()=>{
    let scroll = document.getElementById("scroll");

setInterval(()=>{
window.addEventListener("scroll",()=>{

    // console.log(document.getElementById("scroll").classList);
    if(window.scrollY>0){
        scroll.classList.remove("scrollHide");
        scroll.classList.add("scrollShow");
      
    }
    else{
        scroll.classList.remove("scrollShow");
        scroll.classList.add("scrollHide");  
    }

    console.log(window.scrollX , window.scrollY);

}) 
},500);


scroll.addEventListener("click",()=>{
window.scrollTo(0,0);
})
}

window.addEventListener("scroll",Scrolling);

render(<React.StrictMode><App /></React.StrictMode>, document.getElementById("root"));
