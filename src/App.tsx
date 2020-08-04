import React from 'react';
import { Container, Box } from '@material-ui/core';
import Navigation from './components/Navigation';

export function App() {
  return (
    <Container className="App">
      <Box display="flex" flexDirection="column">
        <Navigation />
        <div>TODO</div>
      </Box>
    </Container>
  );
}
