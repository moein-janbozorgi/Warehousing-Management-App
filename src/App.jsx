import { ToastContainer } from "react-toastify";
import TanstackQueryProvider from "./Providers/TanstackQueryProvider";
import Router from "./router/Router";

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
      <ToastContainer position="top-center" />
    </TanstackQueryProvider>
  );
}

export default App;
