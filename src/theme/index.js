// import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider} from "@mui/material/styles";
import {ThemeProvider as EmotionThemeProvider} from "@emotion/react";
import {useMemo, useState} from "react";
import CssBaseline from '@mui/material/CssBaseline';

import palette from "./base/palette"
import shape from "./base/shape"
import typography from "./base/typography";
import breakpoints from "./base/breakpoints";
import shadows, { customShadows } from "./base/shadows";

import GlobalStyles from "./base/globalStyles";


const ThemeConfig = ({ children }) => {
    const [ light, setLight] = useState(false)

    const themeOptions = useMemo(
        () => ({
            palette: light ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
            shape,
            typography,
            breakpoints,
            shadows: light ? shadows.light : shadows.dark,
            customShadows: light ? customShadows.light : customShadows.dark
        }),
        [light]
    );

    const theme = createTheme(themeOptions);

    return (
        <EmotionThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>

                { children }
            </ThemeProvider>
        </EmotionThemeProvider>
    )
}

export default ThemeConfig