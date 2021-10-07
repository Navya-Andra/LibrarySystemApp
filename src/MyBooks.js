import React, {Component} from "react";
import {  Table, Divider } from "semantic-ui-react";
import books from './data.json';
import './Home.css'

class Books extends Component {
	render() {
	  return (
        <div>
            <h1 style={{backgroundColor: "pink", margin: "20px", marginTop: "0px"}}>Requests</h1>
            <div className = "Books-field">
			<h2>Request List</h2>
	        <div>
			<Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
			<Table.HeaderCell>Status</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
          {books.filter((books, id) => id < 5 ).map(el => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>{el.title}</Table.Cell>
                <Table.Cell>{el.author}</Table.Cell>
                <Table.Cell>{el.year}</Table.Cell>
				<Table.Cell>{el.status}</Table.Cell>
        <Divider />
			</Table.Row>
            );
          })}
        </Table.Body>
      </Table>

			</div>
		    </div>
	    </div>
	  );
	}
  }

  export default Books;