import { Button, Container } from "@mui/material"
import { useNotification } from "../../context/notification.context"

export const HomePage: React.FC<{}> = () => {
    const { getError } = useNotification()

    const handleClick = () => {
        getError("Tienes un error")
    }

    return (
        <Container sx={{ mt: 9 }} maxWidth='xl'>
            <Button fullWidth variant='contained' onClick={handleClick}>
                Estamos en Home
            </Button>
        </Container>
    )
}