import { Provider } from "react-redux";
import { store } from "./redux/state";

import "./App.css";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
}

export default App;
