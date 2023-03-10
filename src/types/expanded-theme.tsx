declare module "@mui/material/styles/createPalette" {
  
  export interface TypeText {
    main:string,
    focus:string
  }

};


declare module '@mui/material/styles/createTheme' {
  
  interface Theme {
    functions: {
      boxShadow: Function,
      hexToRgb: Function,
      pxToRem: Function,
      rgba: Function,
    },

    breakpoints: {
      values: {
        xs: number,
        sm: number,
        md: number,
        lg: number,
        xl: number,
        xxl: number,
      },      
    },

    borders: {
      borderColor: String,

      borderWidth: {
        0: Number,
        1: String,
        2: String,
        3: String,
        4: String,
        5: String,
      },
    
      borderRadius: {
        xs: String,
        sm: String,
        md: String,
        lg: String,
        xl: String,
        xxl: String,
        section: String,
      },      
    }

    boxShadows: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      inset: string;
      colored: {
        primary: string;
        secondary: string;
        info: string;
        success: string;
        warning: string;
        error: string;
        light: string;
        dark: string;
        white: string;
      },
      sliderBoxShadow: {
        thumb: string;
      },
      tabsBoxShadow: {
        indicator: string;
      }
    }

  }

  interface ThemeOptions {

    functions?: {
      boxShadow?: Function,
      hexToRgb?: Function,
      pxToRem?: Function,
      rgba?: Function,
    }

    breakpoints?: {
      values: {
        xs?: number,
        sm?: number,
        md?: number,
        lg?: number,
        xl?: number,
        xxl?: number,
      },      
    }

    borders?: {
      borderColor: String,

      borderWidth: {
        0: Number,
        1: String,
        2: String,
        3: String,
        4: String,
        5: String,
      },
    
      borderRadius: {
        xs: String,
        sm: String,
        md: String,
        lg: String,
        xl: String,
        xxl: String,
        section: String,
      },      
    }

    boxShadows: {

      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      inset: string;
      colored: {
        primary: string;
        secondary: string;
        info: string;
        success: string;
        warning: string;
        error: string;
        light: string;
        dark: string;
        white: string;
      },
      sliderBoxShadow: {
        thumb: string;
      },
      tabsBoxShadow: {
        indicator: string;
      },
      
    }

  }
}

export default {};