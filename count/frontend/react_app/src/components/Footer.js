import * as React from 'react';
import Typography from '@mui/material/Typography';

import { SocialIcon } from 'react-social-icons'


function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" component={'span'}>
         <div className="text-center">
        <p>
        </p>  
        <p>
        {'Copyright © '}
        
        {new Date().getFullYear()}
        {'.'}
        </p>
       
      
      
       <p>
           <a href="https://arxiv.org/pdf/2005.13125.pdf" target="_top"> Read the Paper</a>
       </p>       
       <p>
           <SocialIcon url="https://linkedin.com/in/kelechi-nwaike" />
           <SocialIcon url="https://github.com/Kc2fresh/Extracting-Counterfactual-data"/>
           <SocialIcon url="mailto:https://kell2108n@gmail.com"/>
       </p>
       </div>
       </Typography>
    );
  }
export default Footer

//<SocialIcon url="github.com/Kc2fresh/Extracting-Counterfactual-data"/>