// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import * as bootstrap from "bootstrap"
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from './store'
import { Provider } from 'react-redux'

import App from "./Board";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);