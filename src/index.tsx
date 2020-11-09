import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { initializeDB } from "./backend";

import { App } from "./App";

async function startApp() {
  await initializeDB();

  const rootElement = document.getElementById("root");
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
}

startApp();
