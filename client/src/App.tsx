import { CssBaseline, ThemeProvider } from "@mui/material";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import cache from "apollo/cache";
import Layout from "layout";
import theme from "theme";
import { AppProvider } from "context/app.context";

const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  cache,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProvider>
          <Layout />
        </AppProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
