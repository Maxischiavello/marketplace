import { Button, Container } from "@mui/material"
import { HeaderComponent } from "../../components/Header"

export const HomePage: React.FC<{}> = () => {

    return (
        <Container sx={{ mt: 9 }} maxWidth='xl'>
            <HeaderComponent 
                title="titulo"
                description="descripcion"
                element={<Button fullWidth variant="contained">button</Button>}
            />
        </Container>
    )
}