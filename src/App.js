import { Button, TextField } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React&apos;s My Auction House</p>
        <TextField autoFocus type="text" label="Login" variant="outlined" />
        <TextField type="password" label="Password" variant="outlined" />
        <Button variant="contained" color="primary">
          Enter
        </Button>
      </main>
    </div>
  );
}

export default App;
