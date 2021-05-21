import React from "react";
import { GeistProvider, CssBaseline } from '@geist-ui/react'

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <h1>Hola</h1>
    </GeistProvider>
  );
}

export default App;
