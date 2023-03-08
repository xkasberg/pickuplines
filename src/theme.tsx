import { pink, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: pink.A100,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;