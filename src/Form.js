import React, {Component} from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your Request list contains: ' + this.state.value + ' books');
    event.preventDefault();
  }
  render() {
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
         <form onSubmit={this.handleSubmit}>
          <label>
          No. of Books 
          <select value={this.state.value} onChange={this.handleChange}>
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
}

export default MyForm;
