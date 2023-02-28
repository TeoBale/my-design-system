import '../../styles/App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import {Button} from "@mui/material";

import ThemeConfig from "../../theme/index"

const theme = createTheme({
    palette: {
        primary: {
            main: '#c1539c',
        },
        secondary: {
            main: '#edf2ff',
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
        },
    },
});

function App() {
  return (
    <ThemeConfig>
        <Button disabled variant="contained" >Ciao mondo</Button>
    </ThemeConfig>
  );
}

export default App;
