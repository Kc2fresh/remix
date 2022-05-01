import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { InputAdornment } from '@mui/material';
import axios from "axios"
import {useState} from 'react'
import Stack from '@mui/material/Stack';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';




  



export default function Home() {
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  const Predict = () => {
    let TextField = new FormData();
    TextField.append('data', data)
               
  const url = 'http://127.0.0.1:8000/api/counterinfer/';
            
            axios.post(url , TextField)
            .then(response => {  
              if(response.data.success === true)
                 {
                    setResult(response.data);
                    setShowAlert(true);
                 }
              else 
                 {
                  setResult(response.data);
                  setShowAlert(true);
                }
               })
               
            
    }



  return (
    <Box
       component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width:[250,300,500]}, alignItems: 'center',marginTop: 25,
        display: 'flex',
        flexDirection: 'column',maxWidth: '100%',
      }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        <TextField
          id="outlined-multiline-static"
          label="Input Text"
          multiline
          rows={1}
          data='data'
          value={data}
          onChange={(e) => setData(e.target.value)} 
          InputProps={{  
          endAdornment: (
            <InputAdornment position="end">
              <IconButton end= 'false' color="primary" size= 'small' onClick={Predict}>
                  Check
              </IconButton>
            </InputAdornment>
          ),
        }}
       /> 
      </div>
      
     

    <div>
    
    </div>
     
    {showAlert === true &&
    <Stack sx={{ width:[250,300,500] }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Prediction</AlertTitle>
        <strong>{result}</strong>
    </Alert>
    </Stack> }
  
    

     
    </Box>

    
  );

  

}
        
        
        


// <SnackbarContent message={result}/>



//<>
  // {result}
//</>