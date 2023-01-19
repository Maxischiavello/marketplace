import React from "react"
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Pagination
} from "@mui/material"
import { characters } from "../../api/characters"
import { TypeCharacter } from "./interface/character.interface"
import { CardComponent, HeaderComponent } from "../../components"

export const HomePage: React.FC<{}> = () => {
    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null)
    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState(1)
    const [loading, setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        setLoading(true)
        characters
            .getAll({ page })
            .then((r) => {
                setCount(r.data.info.pages)
                setAllCharacters(r.data.results)
                setTimeout(() => setLoading(false), 1000)
            }).catch((error) => {
                console.log(error)
            })
    }, [page])

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

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
                <>
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
                                                id={character.id}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : "There is no data."
                        }
                    </div>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 3 }}>
                        <Pagination
                            count={count}
                            page={page}
                            onChange={handleChange}
                            variant="outlined"
                            color="primary"
                            size="large"
                        />
                    </Box>
                </>
            )}
        </Container>
    )
}