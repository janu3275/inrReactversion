import { Box, Typography } from "@mui/material";
import React from "react";
import "./Products.css"

const Products = ({data})=>{




    
    return(
         <Box className="bigbox">
        {data && data.map((x,index)=>
        <Box key={index} className="productbox">
            <Box className="imgbox">
                <img className="medimage" src="./Images/Rectangle 12.png" alt="med" />
            </Box>
            <Box
            className="contentbox">
            <div className="contentheading">Item {x.number}</div>
            <div className="smallline">By Global xchange</div>
            <div className="contentdescription">jhjgjhgjhgjhgjh hbgjh yada yada yada Read more ...</div>
             <Box className="stars">
             <img src="./Images/Group 11994.png" alt="starimg" /> 
             <img src="./Images/Group 11994.png" alt="starimg" />
             <img src="./Images/Group 11994.png" alt="starimg" />
             <img src="./Images/Group 11994.png" alt="starimg" />
             <img src="./Images/Group 11994.png" alt="starimg" />
             </Box>
             <Box className="lastrow">
                <div className="rates">15<div className="usd">USD</div></div>
                <div className="likecomment">
                <img class="hh3" src="./Images/Group 11995.png" alt="jhgj" />
  <img class="hh3" src="./Images/Group.png" alt="jkh" />   
                </div>
             </Box>
            </Box>
        </Box>)}
        
        </Box>
    )
}

export default Products;