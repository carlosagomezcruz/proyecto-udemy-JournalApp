import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        second: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})