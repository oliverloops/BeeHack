import React, { createContext, useContext } from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

// Routes
import AllRoutes from "./routes";

// Context API
export const AppContext = createContext([]);

function App() {
  const [content, setContent] = React.useState([]);

  return (
    <GeistProvider>
      <CssBaseline />
      <AppContext.Provider value={{ content: content, setContent: setContent }}>
        <AllRoutes />
      </AppContext.Provider>
    </GeistProvider>
  );
}

export default App;
