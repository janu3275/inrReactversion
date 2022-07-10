import React, { useState } from 'react';
import Box from "@mui/material/Box"
import { Button,TextField } from '@mui/material';
import "./Main.css"
import Products from './Products.js';
import alldata from "../data/alldata.json"
import onedata from "../data/data1.json"
import seconddata from "../data/data2.json"
import thirddata from "../data/data3.json"
import fourthdata from "../data/data4.json"




const Main = ()=>{
const [pagedata,setpagedata] = useState([...alldata])

const [formvisibility,setvisibility] = useState(false)

// const data = (page)=>{
//     console.log(page)
//     if(page==="all"){
//       setpagedata(alldata)
//     }else if(page==="one"){
//         setpagedata(onedata)
//     }else if(page==="two"){
//         setpagedata(seconddata)
//     }else if(page==="third"){
//         setpagedata(thirddata)
//     }else{
//         setpagedata(fourthdata)
//     }

// }

const everydata = ()=>{
 setpagedata(alldata)
}

const firstdata = ()=>{
    setpagedata(onedata)
   }

const twodata = ()=>{
    setpagedata(seconddata)
   }

const threedata = ()=>{
    setpagedata(thirddata)
   }

const fourdata = ()=>{
    setpagedata(fourthdata)
   }
const formon = ()=>{
setvisibility(true)
}

const formoff = ()=>{
    setvisibility(false)
}
console.log(formvisibility)
return (
    <>{formvisibility&&
    <Box className='parentform'>
    <Box className='invisibleform'>

    <img className="smoke" src="./Images/Group 2.png" alt="smoke" />
    <TextField className='username'  id="standard-basic" label="Standard" variant="standard" />
    <TextField className='password' id="standard-basic" label="Standard" variant="standard" />
    <Button onClick={()=>formoff()} className='submitbtn'>Enter</Button>
    
   
    </Box>    
    </Box>
    }
    
    <Box className='header'>
     <img className="fimage" src="../Images/Group 3.png" alt="2" />
     <img className="fimage" src="../Images/Group 2.png" alt="3" />
     <img onClick={()=>formon()}   className="fimage" id="onoverlay"  src="../Images/Group 5.png" alt="5" />
     
    </Box>
    <Box className='ads'>
    <img className="aimg" src="./Images/Orange and White Modern Simple Technology YouTube Thumbnail 3.png" alt="ad1" />
<img className="aimg" src="./Images/Orange and White Modern Simple Technology YouTube Thumbnail 1.png" alt="ad2" />
<img 
 
 className="aimg"
 src="./Images/Orange and White Modern Simple Technology YouTube Thumbnail 2.png" alt="ad3" />

    </Box>
    <Box className='pages'>
    <Button
     
     onClick={()=>everydata()} className={pagedata===alldata?'menu blackborder':"menu"}
     >
     <img src="./Images/Group 12027.png" alt='all'/>
     </Button>

    <Button 
    onClick={()=>firstdata()}
    className={pagedata===onedata?'menu blackborder':"menu"}
    >
    <img src="./Images/Group 12025.png" alt='all'/>
    </Button>

    <Button 
    onClick={()=>twodata()} 
    className={pagedata===seconddata?'menu blackborder':"menu"}
    ><img className='littleleft' src="./Images/Group 12024.png" alt='all'/>
    <img src="./Images/Menu 2.png" alt='all'/>
    </Button>

    <Button 
    onClick={()=>threedata()}
    className={pagedata===thirddata?'menu blackborder':"menu"}
    >
    <img src="./Images/Group 12025 (1).png" alt='all'/>
    </Button>
    
    <Button 
    onClick={()=>fourdata()} 
    className={pagedata===fourthdata?'specailmenu blackborder':"specailmenu "}
    ><img src="./Images/Group 12025 (2).png" alt='all'/>
    <Box className='graybackground'>
    <img className='vector' src='./Images/Vector (1).png' alt="arrow"/>
    </Box>
    </Button>

    </Box>
     
      
      <Products data = {pagedata} />

     
     



      
    
</>
)

}

export default Main;