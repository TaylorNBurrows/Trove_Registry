import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
const theme = createMuiTheme({
  palette: {
    primary: {
        light:"b2ab6d",
        main:"",
        dark:"",
    },
    secondary: {
        light:"b2ab6d",
        main:"",
        dark:"",
    },
  },
  typography:{
      fontFamily:"Spartan, Helvetica, sans-serif"
  },
  overrides: {
    MuiButton:{
        root:{
            borderRadius:'12px'
        }
    }
  },
});