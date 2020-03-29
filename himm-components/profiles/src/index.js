import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "styled-components";
import * as theme from "./styled-component/theme";
import App from './components/App.jsx';

ReactDOM.render(
  <ThemeProvider theme={theme}>
     <App />
  </ThemeProvider>,
  document.getElementById('property')
);