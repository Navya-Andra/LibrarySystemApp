import React, {Component} from 'react';
import BooksList from './BooksList';
import './Home.css'
import News from './News'
class RecentBooks extends Component {
	render() {
	  return (
		<div className="box-field">
			<h3>My Recent Books</h3>
	         <BooksList />
		</div>
	  );
	}
  }
  
  class Newsbox extends Component {
	render() {
	  return (
		<div className="newsbox">
		  <h2>News</h2>
		  <News />
		</div>
	  );
	}
  }
  
  export default class Home extends React.Component {
	render() {
	  return (
		<div className="rowC">
		  <RecentBooks />
		  <Newsbox />
		</div>
	  );
	}
  }
  
 