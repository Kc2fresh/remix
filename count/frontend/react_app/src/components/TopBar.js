import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);



  return (
    <Box sx= {{ flexGrow: 1 }}>
 
      <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={handleClickOpen('paper')}>
            Counterfactual or Not?
      </Typography>
     

    <div>
      
      
  
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">What are Counterfactuals?</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
                      >
            {[...new Array(1)]
   
              .map(
                () => `Counterfactual conditionals are conditional 
                sentences which discuss what would have been true under
                 different circumstances, e.g. "If Peter believed in ghosts, 
                 he would be afraid to be here." Counterfactuals are contrasted 
                 with indicatives, which are generally restricted to discussing 
                 open possibilities. `,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=> window.open("https://en.wikipedia.org/wiki/Counterfactual_conditional")}>Wikipedia</Button>
        </DialogActions>
      </Dialog>
    </div>
    </Toolbar>
   </AppBar>
  </Box>
  );
}

