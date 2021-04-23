import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import GavelIcon from '@material-ui/icons/Gavel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import styles from './styles';

const useStyles = makeStyles(styles);

export default function Login({ history }) {
  const classes = useStyles();

  const [email, setEmail] = useState('admin@email.com');
  const [password, setPassword] = useState('mypass');

  const handleSubmit = e => {
    e.preventDefault();

    if (email === 'admin@email.com' && password === 'mypass')
      history.push('/home');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          My React&apos;s Auction House
        </Typography>
        <GavelIcon className={classes.logoIcon} />
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputProps={{
              value: email,
              onChange: e => setEmail(e.target.value),
            }}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputProps={{
              value: password,
              onChange: e => setPassword(e.target.value),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enter
          </Button>
        </form>
      </div>
      <Box mt={6}>
        <Copyright />
      </Box>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    push: PropTypes.func,
  }),
};

Login.defaultProps = {
  history: {},
};
