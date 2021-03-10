import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
  },
}));

const Appbar = ({handleLogOut}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography component={Link} to="/" color="inherit" variant="h6" className={classes.title}>
            Kavos
          </Typography>
          <Button component={Link} color="inherit" to="/login" >Login</Button>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;