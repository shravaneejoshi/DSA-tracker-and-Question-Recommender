import { useState } from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import data from "./striverJson";

export default function StarIcon ({starCount}){





    
    //star rating
const [starValue, setStarValue] = useState(0);


//console.log(starValue)
return(

    <>
   {new Array(starCount).fill(0).map((value,index)=> {
         return(
            <span 
             key={index}
             onClick={()=>(setStarValue(index+1))}
           //  onMouseEnter={()=>(setHoverValue(index+1))}
             style={{color:starValue>index ?'#FFD700' : '#ccc'}}
            >
 <StarRateIcon/>
            </span>
         )
    })} 
    </>
)


}