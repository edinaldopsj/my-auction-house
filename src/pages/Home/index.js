import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Item {index}
                    </Typography>
                    <Typography>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Laborum, ratione reprehenderit, est dolores fugiat quia
                      totam iusto, suscipit exercitationem nostrum.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="default">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <Pagination count={10} color="primary" />
          </Grid>
        </Container>
      </main>
    </>
  );
}
