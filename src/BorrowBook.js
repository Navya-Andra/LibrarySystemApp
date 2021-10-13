import React from "react";
import MyForm from './Form'

function BorrowBook(){
	  return (
        <div>
            <h1 style={{backgroundColor: "pink", margin: "10px", marginTop: "0px"}}>Reserve Book</h1>
            <div className = "form-field">
              <h2>Books Reservation Form</h2>
              <MyForm />
		        </div>
        </div>
	  );
  }

  export default BorrowBook;