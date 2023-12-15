import { createTheme } from '@mui/material';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    fontSize: 14,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#000',
        },
      },
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
