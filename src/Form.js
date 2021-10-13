import React, { useState } from "react";

function MyForm(){
  const[state, setState] = useState("");

  const handleChange = (event) => {
    setState({value: event.target.value});
}
  const handleSubmit = (event) => {
    event.preventDefault();
}

    return (
      <div class="form-container">
        <form class="register-form">
          <label>Start Date</label>
          <input
            id="start-date"
            class="form-field"
            type="date"
            placeholder="StartDate"
            name="start-date"
            required="true"
          />
          <label>End Date</label>
          <input
            id="end-date"
            class="form-field"
            type="date"
            placeholder="End Date"
            name="end-date"
            required="true"
          />
          <input
            id="BookName"
            class="form-field"
            type="text"
            placeholder="Book Name"
            name="BookName"
            required="true"
          />
          <input
            id="AuthorName"
            class="form-field"
            type="text"
            placeholder="Author Name"
            name="AuthorName"
            required="true"
          />
         <form onSubmit={handleSubmit}>
          <label>
          No. of Books 
          <select value={state.value} onChange={handleChange}>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          </label>
          </form>
          <button class="form-field" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }

export default MyForm;
