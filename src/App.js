import React from "react";
import Header from './Header';
import Home from './Home';
import MyBooks from './MyBooks';
import BorrowBook from './BorrowBook';
import MarerialUIDrawer from './drawer';
// browser router - base configurartion
// switch - wrap the dynamic routes, will activate correct route
// route - configure specific routes and wrap components that should render
import { BrowserRouter, Route, Switch }
	from 'react-router-dom';
// import Login from './Login'
// import useToken from './useToken';


 
function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
      {/* This will render on every page */}
      <Header/>
      <BrowserRouter>
        <MarerialUIDrawer/>
      <Switch>
		   <Route exact path='/' render={props => <Home {...props} /> }/>
		   <Route exact path='/BorrowBook' render={props => <BorrowBook {...props} /> }/>
		   <Route exact path='/MyBooks' render={props => <MyBooks {...props} /> }/>
	    </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App; 

