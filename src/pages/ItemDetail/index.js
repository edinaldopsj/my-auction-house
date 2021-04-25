import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles';

import api from '../../services/api';

const useStyles = makeStyles(styles);

export default function ItemDetail() {
  const classes = useStyles();

  const { id } = useParams();

  const [item, setItem] = useState({});
  const [currentBid, setCurrentBid] = useState(0);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    async function loadItem() {
      const response = await api.get(`items/${id}`);

      setItem(response.data.item);
    }

    async function loadBids() {
      const response = await api.get(`bids`, {
        headers: {
          item_id: id,
        },
      });

      setBids(response.data.bids);
    }

    loadItem();
    loadBids();
  }, []);

  const handleClickBid = async () => {
    if (Number(currentBid) > 0) {
      await api
        .post(
          `/bids`,
          { amount: Number(currentBid) },
          { headers: { item_id: id, bidder_id: localStorage.getItem('user') } },
        )
        .then(res => {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          window.location.reload();
        });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please use a correct number value');
    }
  };

  return (
    <>
      <CssBaseline />
      <main>
        <Container maxWidth="md">
          <Grid container className={classes.grid}>
            <Grid item className={classes.title} xs={12} sm={12}>
              <Typography gutterBottom variant="h2" component="h2">
                {item.name}
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
                    {item.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={8} className={classes.bidGrid}>
                  <TextField
                    variant="filled"
                    margin="normal"
                    fullWidth
                    id="bid"
                    label="Insert bid here"
                    name="bid"
                    autoComplete="bid"
                    autoFocus
                    inputProps={{
                      className: classes.bidInput,
                      value: currentBid,
                      onChange: e => setCurrentBid(e.target.value),
                    }}
                  />
                  <Button
                    className={classes.bidButton}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={() => handleClickBid()}
                  >
                    Bid Now
                  </Button>
                  <Typography gutterBottom variant="h4" component="h4">
                    Latest Bids
                  </Typography>
                  {bids.map(bid => (
                    <Typography key={bid.id} variant="body1" gutterBottom>
                      {` U$ ${bid.amount.toLocaleString('en-US')} at ${new Date(
                        bid.bidded_at,
                      ).toLocaleString('en-US')}`}
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.gridBottom}>
            <Link to="/home">
              <Button variant="contained" size="small" color="default">
                Go back
              </Button>
            </Link>
          </Grid>
        </Container>
      </main>
    </>
  );
}
