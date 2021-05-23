import React from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

// Routes
import AllRoutes from "./routes";

function App() {
  return (
    <GeistProvider>
        <CssBaseline />
        <AllRoutes />
    </GeistProvider>
  );
}

export default App;
