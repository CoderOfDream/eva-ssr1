import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
// import NextNprogress from 'nextjs-progressbar';
import NProgress from 'next-nprogress-emotion';


import theme from '../src/theme';
import Header from "../components/header";

export const cache = createCache({ key: 'css', prepend: true });

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        {/*<NextNprogress*/}
        {/*  color="#CE2B2B"*/}
        {/*  startPosition={0.3}*/}
        {/*  stopDelayMs={0}*/}
        {/*  height="2"*/}
        {/*/>*/}
        <NProgress
          color="#CE2B2B"
          options={{ trickleSpeed: 50 }}
          showAfterMs={300}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
