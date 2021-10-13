import React from "react";
import BooksList from './BooksList';
import './Home.css'

function Books(){
	  return (
        <div>
            <h1 style={{backgroundColor: "pink", margin: "20px", marginTop: "0px"}}>Requests</h1>
            <div className = "Books-field">
			<h2>Request List</h2>
      <BooksList />
		    </div>
	    </div>
	  );
	}

  export default Books;