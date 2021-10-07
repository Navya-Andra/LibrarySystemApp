
import {AppBar,Toolbar,Box,Button} from "@material-ui/core";
import React, {Component} from "react";
// import Login from './Login.js'
const styles = {
  loginButton: {
    padding: '2px',
    textAlign: 'center',
    backgroundColor: '#ddf58c',
    color: 'white',
    marginLeft: 'auto'
  }
  };

  
class Header extends Component{
  constructor(props) {
    super(props) 
    this.state = {
        isOpen: false
    }
       this.toggle = this.toggle.bind(this);
}
toggle() {
    this.setState(prevState => {
        return {
            isOpen: !prevState.isOpen
        }
    });
}
  render(){
    let btnTxt = this.state.isOpen ? 'Login' : 'Logout'
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
           <Button style = {styles.loginButton} onClick={this.toggle}>{btnTxt}</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
      
    );
  }
}
export default Header;