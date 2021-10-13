import React from 'react';
import './Home.css'
import News from './News'
import books from './data.json';
import {  Table, Divider } from "semantic-ui-react";

function RecentBooks(){
	  return (
		<div className="box-field">
			<h3>My Recent Books</h3>
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
	  );
  }
  
  function Newsbox(){
	  return (
		<div className="newsbox">
		  <h2>News</h2>
		  <News />
		</div>
	  );
  }
  
  export default function Home(){
	  return (
		<div className="rowC">
		  <RecentBooks />
		  <Newsbox />
		</div>
	  );
  }
  
 