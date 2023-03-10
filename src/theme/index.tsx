import { createTheme } from "@mui/material/styles";

import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";
import boxShadows from "./base/boxShadows";
import borders from "./base/borders";
import globals from "./base/globals";

import boxShadow from "./functions/boxShadow";
import hexToRgb from "./functions/hexToRgb";
import pxToRem from "./functions/pxToRem";
import rgba from "./functions/rgba";

import input from './components/input';

// A custom theme for this app
const theme = createTheme({

  functions:{
   boxShadow,
   hexToRgb,
   pxToRem,
   rgba
  },
  
  palette: { ...colors},
  typography: { ...typography},
  breakpoints: { ...breakpoints },
  borders: { ...borders},
  boxShadows: { ...boxShadows },

  components: {
   MuiCssBaseline: {
     styleOverrides: {
       ...globals,
     }
   },
   MuiInput: { ...input },
  }
 
});

export default theme;
