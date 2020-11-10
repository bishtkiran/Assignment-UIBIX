import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Currency from './components/Currency';
import Country from './components/Country';
import Country1 from './components/Country1';
import Content from './components/Content';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import metrics from './Images/metrics.png'
import analytics from './Images/analytics.png'
import trading from './Images/trading.png'
import notifications from './Images/notifications.png'
import logout from './Images/logout.png'
import {Container} from 'reactstrap';
import Content1 from './components/Content1';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root} style={{width:201,height:970,marginTop:10}}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem><div class="mb-auto p-2" style={{marginLeft:0}}><div style={{width:96,height:88.69,marginLeft:10}}>
          <img src={metrics} alt="Dashboard"></img><br/><br/>
          <p style={{width:96,height:27,textAlign:"left"}}>DashBoard</p></div></div></MenuItem>
          <MenuItem><div class="p-2"><div style={{width:78,height:82,marginLeft:0}}><img src={analytics} alt="Analytics"></img><br/><br/>
          <p style={{width:78,height:27,textAlign:"left"}}>Analytics</p></div></div></MenuItem>
          <MenuItem><div class="p-2"> <div style={{width:66,height:85,marginLeft:0}}><img src={trading} alt="Trading"></img><br/><br/>
          <p style={{width:66,height:27,textAlign:"left"}}>Trading</p></div></div></MenuItem>
          <MenuItem><div class="p-2">  <div style={{width:112,height:73.84,marginLeft:0}}><img src={notifications} alt="Notifications"></img><br/><br/>
          <p style={{width:112,height:27,textAlign:"left"}}>Notifications</p></div></div></MenuItem>
          <MenuItem><div class="p-2" style={{marginTop:420}}>  <div style={{width:112,height:73.84,marginLeft:0}}><img src={logout} alt="Logout"></img><br/><br/>
          <p style={{width:63,height:27,textAlign:"left"}}>Logout</p></div></div></MenuItem>
          
        </MenuList>
      </Paper>
      <div>
        
      
      <Container fluid style={{width:1719,height:1080}}>
       
      <Header name="Andrew"/>
      <Currency/>
      <Country/>
      <Content/>
  
    
      
      </Container>
    

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    <MenuItem onClick={handleClose}>Analytics</MenuItem>
                    <MenuItem onClick={handleClose}>Trending</MenuItem>
                    <MenuItem onClick={handleClose}>Notifications</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}


