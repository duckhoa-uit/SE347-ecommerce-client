import { ChakraProvider } from '@chakra-ui/react';
import { EmptyLayout } from '@layouts/empty';
import { wrapper } from 'app/store';
import { Provider } from 'react-redux';
import theme from 'theme/theme';
import '../styles/main.scss';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
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

export default MyApp;
