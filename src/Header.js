
import {AppBar,Toolbar,Box,Button} from "@material-ui/core";
import React, {useState} from "react";

const styles = {
  loginButton: {
    padding: '2px',
    textAlign: 'center',
    backgroundColor: '#ddf58c',
    color: 'white',
    marginLeft: 'auto'
  }
  };

  
function Header(){
  const [isOpen, setIsOpen] = useState(false);
const toggle = () => {setIsOpen(prevState => {
  return {
      isOpen: !prevState.isOpen
    }
  });
}
    let btnTxt = isOpen ? 'Login' : 'Logout'
    return (
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
           <Button style = {styles.loginButton} onClick={toggle}>{btnTxt}</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
      
    );
  }
export default Header;