import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext';
import { ThemeProvider, CssBaseline, Button } from '@material-ui/core';
import { lightTheme, darkTheme } from './theme/theme';
import { SnackbarProvider } from 'notistack';

function Root() {
  const { dark } = useDarkMode();

  const notistackRef = React.useRef<any>();
  const onClickDismiss = (key: any) => () => {
    notistackRef.current?.closeSnackbar(key);
  };

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={3}
        action={(key) => <Button onClick={onClickDismiss(key)}>Close</Button>}
      >
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
      <BrowserRouter>
        <Provider store={store}>
          <DarkModeProvider>
            <Root />
          </DarkModeProvider>
        </Provider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
