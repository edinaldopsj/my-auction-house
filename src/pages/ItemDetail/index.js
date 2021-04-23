import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

export default function ItemDetail() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <Container maxWidth="md">
          <Grid container className={classes.grid}>
            <Grid item className={classes.title} xs={12} sm={12}>
              <Typography gutterBottom variant="h2" component="h2">
                Flight Prototypes
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img
                width="340"
                src="https://source.unsplash.com/random"
                alt="Unsplash"
                style={{ borderRadius: '50%', border: '1px solid white' }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.bidGrid}>
              <Typography gutterBottom variant="h5" component="h5">
                This is an expensive product from an old artist where...
              </Typography>
              <Typography gutterBottom variant="h4" component="h4">
                Latest Bids
              </Typography>
            </Grid>
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
