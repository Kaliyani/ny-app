import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvdier } from "react-redux";
import { router } from "./config/routerConfig";
import { store } from "./redux/store";

function App() {
  return (
    <ReduxProvdier store={store}>
      <RouterProvider router={router} />
    </ReduxProvdier>
  );
}

export default App;
