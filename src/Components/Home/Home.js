import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {PostContext} from  '../../App';

import Post from '../Post/Post'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Home = () => {
    const postsdata=useContext(PostContext);
    
    
      const classes = useStyles();
   
    return (
        <div className={classes.root}>

    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Posts
          </Typography>
          <Button color="inherit">Merun</Button>
        </Toolbar>
      </AppBar>

        {
            postsdata.map(pt=><Post post={pt}></Post>)
        }

            <Typography >this is home</Typography >
            <Button></Button>
        </div>
    );
};

export default Home;