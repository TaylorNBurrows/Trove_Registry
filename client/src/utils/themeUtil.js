import { createMuiTheme } from '@material-ui/styles';

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
