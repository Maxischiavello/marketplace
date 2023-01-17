import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = '#12181b',
    LIME = '#C8FA5F'
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: themePalette.BG,
        },
        primary:{
            main: themePalette.LIME,
        },
    },
    components: {
        MuiButton:{
            defaultProps: {
                style:{
                    textTransform: 'none',
                    boxShadow: 'none'
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}