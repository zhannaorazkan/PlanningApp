import React from "react";
import './Clock.css'

function Greeting(){
    let curDate=new Date();
    curDate=curDate.getHours()
    let greeting=''

    if(curDate>=5 && curDate<12){
        greeting="Good Morning";
    }else if(curDate>=12 && curDate<18){
        greeting="Good Afternoon"
    }else {
        greeting="Good Evening"
    }
     return(
         <h1 className="greet">{greeting}</h1>
     )


}
export default Greeting