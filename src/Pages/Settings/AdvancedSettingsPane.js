import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
}));

function JobBoard() {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // TODO: handle search submit
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSearchSubmit}>
        <div className={classes.searchContainer}>
          <TextField
            variant="outlined"
            label="Search Jobs"
            value={searchText}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <Button type="submit" variant="contained" color="primary">
                  <SearchIcon />
                </Button>
              ),
            }}
          />
        </div>
      </form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://picsum.photos/345/140"
                title="Job"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Job Title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Job Description
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Add more job listings here */}
      </Grid>
    </div>
  );
}

export default JobBoard;
