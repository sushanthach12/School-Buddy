import React from 'react'
// import styled from '@emotion/styled'
import { styled } from "@mui/system";
import Box from '@mui/material/Box';
const BoxWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '50px',
    // backgroundColor: 'red',
    
}) 

const AuthBox = (props) => {
  return (
    <BoxWrapper>
        <Box 
        sx= {{
            width: 'auto',
            height: 'auto',
            // backgroundColor: 'blue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',

        }}
        >
            {props.children}
        </Box>
    </BoxWrapper>
  )
}

export default AuthBox