import { Box, Grid, Typography, Divider } from "@mui/material";
import React from "react";

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ title, description, element }) => {
    return (
        <div>
            <Box sx={{
                height: "350px",
                textAlign: "center",
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Grid item xs={12}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ height: "100%" }}
                        >
                            <Grid item>
                                <Typography
                                    sx={{
                                        typography: { xs: "h3", sm: "h2", md: "h1" },
                                        color: "primary.main"
                                    }}>
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item sx={{ mt: 2 }}>
                                <Typography>{description}</Typography>
                            </Grid>
                            {
                                element !== undefined &&
                                <Grid item sx={{ mt: 4, width: "100%" }}>{element}</Grid>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    )
}