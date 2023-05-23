import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import {QueryClient, QueryClientProvider} from 'react-query';
import { ThemeProvider } from "@material-tailwind/react";
import { ReactQueryDevtools } from "react-query/devtools";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <BrowserRouter>
    <ThemeProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
