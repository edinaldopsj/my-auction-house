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
            <Grid item className={classes.imageGrid} xs={12} sm={12} md={6}>
              <img
                width="340"
                src="https://source.unsplash.com/random"
                alt="Unsplash"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} className={classes.titleGrid}>
              <Grid container style={{ justifyContent: 'center' }}>
                <Grid item xs={12} sm={8} md={8}>
                  <Typography gutterBottom variant="h4" component="h4">
                    Description
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    This is an expensive product from an old artist where...
                    subtitle1. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Quos blanditiis tenetur
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} className={classes.bidGrid}>
                  <Button
                    className={classes.bidButton}
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    Bid Now
                  </Button>
                  <Typography gutterBottom variant="h4" component="h4">
                    Latest Bids
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    U$ 42.00 - 3 minutes ago
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    U$ 34.00 - 4 minutes ago
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    U$ 30.00 - 1 hour ago
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.gridBottom}>
            <Link to="/home">
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
