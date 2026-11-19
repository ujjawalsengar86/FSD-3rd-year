//  card 600 by 600
// image of cat 300px 300px
// 4 buttons row+,row- col+,col-
import React, {useState} from "react";
const Assignment = ()=>{

    const [width,setWidth] = useState(300);
    const [height,setHeight] =  useState(300);
    const widthInc = ()=>{setWidth(width+1);}
    const widthDec = ()=>{setWidth(width-1);}
    const heightInc = ()=>{setHeight(height+1);}
    const heightDec = ()=>{setHeight(height-1);}

    return(
        <div style={{height:600,width:600, border:'2px solid black'}}>
            <img style={{height:height,width:width}} src="https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?cs=srgb&dl=pexels-blaque-x-863963.jpg&fm=jpg" alt="flower"/>
            <button onClick={widthDec}>row-</button>
            <button onClick={heightInc}>col+</button>
            <button onClick={heightDec}>col-</button>
        </div>
    )
}

export default Assignment