import {createTheme} from '@material-ui/core';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {loadAppProcess} from '../../actions/pages';
import {Header} from '../Header';

declare module '@material-ui/core/styles' {
  interface Theme {
    loginPage: {
      background: string;
      backdropFilter: string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    loginPage?: {
      background: string;
      backdropFilter: string;
    };
  }
}

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  loginPage: {
    background: '#00000033',
    backdropFilter: 'blur(10px)',
  },
});

const lightTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  loginPage: {
    background: '#FFFFFF88',
    backdropFilter: 'blur(3px)',
  },
});

// like App-Shell of PWA
export const App: React.FC = ({children}) => {
  // const location = useLocation();
  const dispatch = useDispatch();

  if (!process.env.IS_BROWSER) {
    dispatch(loadAppProcess());
  } else {
    useEffect(() => {
      dispatch(loadAppProcess());
    }, []);
  }

  // change location
  // e.g. send to Google Analytics...
  useEffect(() => {
  }, [location]);

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default App;
