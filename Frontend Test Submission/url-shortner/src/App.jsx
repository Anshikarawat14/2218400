import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import ShortenerPage from './ShortenerPage';
import StatsPage from './StatsPage';
import RedirectHandler from './RedirectHandler';
import './App.css';

function App() {
  return (
    <>
      <AppBar position="static" sx={{ boxShadow: '0 4px 24px 0 rgba(255,182,193,0.15)', borderRadius: 0, background: '#ffb6c1' }}>
        <Toolbar sx={{ borderRadius: 0 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Shorten URL
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Check Statistics
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4, minHeight: '100vh' }} maxWidth={false} disableGutters>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path=":shortcode" element={<RedirectHandler />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
