import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/app';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
