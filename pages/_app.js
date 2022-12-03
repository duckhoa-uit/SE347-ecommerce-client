import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '@layouts/main';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import theme from 'theme/theme';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
