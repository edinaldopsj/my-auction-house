import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();

  const [search, setSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState([
    {
      id: 'hasjdklfhaklsjdfhajdklsh23',
      name: 'Flight Prototypes',
      price: 2300.89,
      description: 'This is an expensive product from an old artist where...',
      dueDate: '',
    },
    {
      id: '847318274913748fdjkadsfhkj1h3',
      name: 'The Meaningful Tweet',
      price: 15789.35,
      description: 'There is the only one NFT avaliable for this tweet',
      dueDate: '',
    },
    {
      id: 'hyudkjfahdsjkfh35',
      name: 'Monalisa returns',
      price: 434.78,
      description: 'This painting belonged to a famous person in Italy',
      dueDate: '',
    },
  ]);

  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearchItem = e => {
    setFilteredItems(items);
    setSearch(e.target.value);

    setFilteredItems(
      filteredItems.filter(
        v =>
          v.description.toLowerCase().includes(search.toLowerCase()) ||
          v.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  const sortBy = type => {
    if (type === 'N')
      setFilteredItems([
        ...filteredItems.sort((a, b) => {
          if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
          if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;

          return 0;
        }),
      ]);
    else if (type === 'P')
      setFilteredItems([...filteredItems.sort((a, b) => a.price - b.price)]);
  };

  useEffect(() => !search && setFilteredItems(items), [search]);

  return (
    <>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container className={classes.center}>
            <TextField
              variant="filled"
              margin="normal"
              fullWidth
              id="search"
              label="Search your product here"
              name="search"
              autoComplete="search"
              autoFocus
              inputProps={{
                value: search,
                onChange: handleSearchItem,
              }}
            />
            <Button onClick={() => sortBy('P')} size="small" color="default">
              Sort by Price
            </Button>
            <Button onClick={() => sortBy('N')} size="small" color="default">
              Sort by Name
            </Button>
          </Grid>
          <Grid container spacing={4}>
            {filteredItems.map(({ id, name, price, description }) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title={`${id}`}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography className={classes.price}>
                      U$ {price}
                    </Typography>
                    <Typography>{description}</Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <Link to="/item">
                      <Button variant="contained" color="default">
                        Bid now!
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container className={classes.pagination}>
            <Pagination count={10} color="primary" />
          </Grid>
          <Grid container className={classes.center}>
            <Link to="/">
              <Button size="small" color="default">
                Go back
              </Button>
            </Link>
          </Grid>
        </Container>
      </main>
    </>
  );
}
