
import Header from './Header'
import Navbar  from './navbar.jsx'
import Striversheet from './Striversheet'

import striverData from "./striverJson.js"
export default function App(){
//console.log(striverData)
 
   const Problems = striverData.map((obj,index)=>{
      return(
        <Striversheet
           key = {index}
           problem = {obj}
          
        />
      )
   })

     

  return(
    <>
      <Header/>
     <Navbar/>
      {Problems}


   


     
    </>
  
  )

}