import React from 'react';
import { GridList, GridListTile, Card, CardHeader, CardContent, CardActions, IconButton, Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const cards = [
  { id: 1, title: 'Courses', content: 'Course Table View', link: '/card1', formPreview: 'https://example.com/form1' },
  { id: 2, title: 'Instructors', content: 'Instructor Table View', link: '/card2', formPreview: 'https://example.com/form2' },
  { id: 3, title: 'Users', content: 'User Table View', link: '/card3', formPreview: 'https://example.com/form3' },
];

const GroupOfCards = () => {
  return (
    <GridList cellHeight={200} cols={3}>
      {cards.map((card) => (
        <GridListTile key={card.id}>
          <Card>
            <CardHeader
              title={card.title}
              action={
                <IconButton>
                </IconButton>
              }
            />
            <CardContent>
              {card.content}
            </CardContent>
            <CardActions>
              <Button component={Link} to={card.formPreview} variant="contained" color="secondary">Form Preview</Button>
        
            </CardActions>
          </Card>
        </GridListTile>
      ))}
    </GridList>
  );
};

export default GroupOfCards;
