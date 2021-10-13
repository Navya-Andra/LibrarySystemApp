import React from "react";
import { Container, Grid, List, Divider} from "semantic-ui-react";
import news from './sample.json';

function News() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Divider />
              <List>
                {news.map(el => {
                  return (
                    <List.Item  key={el.id}>
                      <List.Content>
                        {el.Status}
                        <Divider />
                      </List.Content>
                      <List.Content>{el.content}</List.Content>
                      <Divider />
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

export default News;
