import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#00d2b4',
            main: '#c93146',
            dark: '#FC6C4D'
        },
        secondary: {
            light: '#a8f4e6',
            main: '#00d2b4',
            dark: '#1a8a98',
        },
    },
    typography: {
        fontFamily: 'Montserrat, Helvetica, Sans-Serif',
        h1: {
            fontFamily: 'Lato, Lucida-Grande, Tahoma, Sans-Serif', fontStyle: 'italic'
        },
        h2: 'Lato Lucida-Grande, Tahoma, Sans-Serif',
        h3: 'Lato Lucida-Grande, Tahoma, Sans-Serif',
        h4: 'Lato Lucida-Grande, Tahoma, Sans-Serif',
        h5: 'Lato Lucida-Grande, Tahoma, Sans-Serif',
        h6: 'Lato Lucida-Grande, Tahoma, Sans-Serif',
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
