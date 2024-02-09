import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<QueryClientProvider client={client}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</QueryClientProvider>
);

reportWebVitals();
