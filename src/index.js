import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';
import { ChakraProvider } from '@chakra-ui/provider';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    spotify: {
      DEFAULT: '#1DB954',
      50: '#9EF0BB',
      100: '#8CEDAE',
      200: '#69E796',
      300: '#46E27D',
      400: '#23DC64',
      500: '#1DB954',
      600: '#15893E',
      700: '#0E5828',
      800: '#062812',
      900: '#000000',
    },
    brand: {
      900: '#1DB954', //main
      800: '#11cb5f', // green
      700: '#121212', //default
      600: '#121212', //paper
    },
  },
});

ReactDOM.render(
  <DataLayer initialState={initialState} reducer={reducer}>
    <ChakraProvider theme={theme}>
      <App></App>
    </ChakraProvider>
  </DataLayer>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
