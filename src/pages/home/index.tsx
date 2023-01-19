import React from "react"
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material"
import { characters } from "../../api/characters"
import { TypeCharacter } from "./interface/character.interface"
import { CardComponent, HeaderComponent } from "../../components"

export const HomePage: React.FC<{}> = () => {
    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        setLoading(true)
        characters
            .getAll({ page: 1 })
            .then((r) => {
                setAllCharacters(r.data.results)
                setTimeout(() => setLoading(false), 1000)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <Container sx={{ mt: 9 }} maxWidth='xl'>
            <HeaderComponent
                title="titulo"
                description="descripcion"
                element={<Button fullWidth variant="contained">button</Button>}
            />
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <div>
                    {
                        allCharacters?.length !== 0 ? (
                            <Grid sx={{ my: 2 }} container spacing={2} direction="row">
                                {allCharacters!.map((character) => (
                                    <Grid item xs={3}>
                                        <CardComponent
                                            key={character.id}
                                            image={character.image}
                                            name={character.name}
                                            species={character.species}
                                            status={character.status}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : "There is no data."
                    }
                </div>
            )}

        </Container>
    )
}