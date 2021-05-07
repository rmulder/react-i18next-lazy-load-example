import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <React.Suspense fallback='Loading...'>
    <App />
  </React.Suspense>,
  rootElement
);
