import {
    createTheme,
    CssBaseline,
    ThemeProvider
} from "@mui/material"

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = "#12181b",
    LIME = "#C8FA5F",
    // alert styles
    ERROR_MAIN = "#f44335",
    BG_ERROR_MAIN = "rgba(244,67,54,0.1",
    SUCCESS_MAIN = "#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"
}

const theme = createTheme({
    palette:{
        mode: "dark",
        background:{
            default: themePalette.BG,
        },
        primary:{
            main: themePalette.LIME,
        },
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                }
            }
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius: "0.8em",
                    fontSize: "1em",
                },
            },
            styleOverrides:{
                standardError:{
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN,
                },
                standardSuccess:{
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                    background: themePalette.BG_SUCCESS_MAIN,
                },
            }
        },
    },
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}