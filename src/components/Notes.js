import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function Notes(){

    const useStyles = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));
    
    // export default function BasicTextFields() {
      const classes = useStyles();
    
      return (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Enter Notes" />
        </form>
      );
    // }
}

export default Notes