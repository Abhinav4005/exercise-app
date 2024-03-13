import React from "react";
import {Box,Typography} from "@mui/material";
import {AiFillHeart} from "react-icons/ai";

const Footer =()=>{
    return(
        <Box mt="80px" bgcolor="#fff34f">
            <Typography variant="h5" pb="40px" mt="20px" display="flex" justifyContent="center" alignItems="center">
                Made with <AiFillHeart style={{fontSize:'18px',gap:'20px',color:'red'}}/> by Abhinav
            </Typography>
        </Box>
    )
}

export default Footer;