import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "layout";
import theme from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
