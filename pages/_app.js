import { ChakraProvider } from '@chakra-ui/react';
import { EmptyLayout } from '@layouts/empty';
import { store, wrapper } from 'app/store';
import { Provider } from 'react-redux';
import theme from 'theme/theme';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
