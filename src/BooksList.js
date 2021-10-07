import React, { Component } from "react";
import {  Table, Divider } from "semantic-ui-react";
import books from './data.json';


class BooksList extends Component {
 render() {
    return (
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
          {books.map(el => {
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
   );
  }
}

export default BooksList;
