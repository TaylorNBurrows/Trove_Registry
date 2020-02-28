import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#84c887',
            main: '#66bb6a',
            dark: '#47824a'
        },
        secondary: {
            light: '#51d1e1',
            main: '#26c6da',
            dark: '#1a8a98'
        },
    },
    typography: {
        fontFamily: ''
    },
    overrides: { //override a specific feature of the component we name below
        MuiButton: {
            root: {
                borderRadius: '25px'
            }
        }
    }
});

export default theme
