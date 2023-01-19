import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Typography
} from "@mui/material"
import { useNavigate } from "react-router-dom";

type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
    id: number;
}

export const CardComponent: React.FC<CardProps> = ({ image, name, species, status, id }) => {
    let navigate = useNavigate()

    return (
        <Card>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="character-img"
            />
            <CardContent>
                <Typography variant="h6" sx={{ mb: 1.5 }}>{name}</Typography>
                <Divider />
                <Typography sx={{ mt: 1.5 }} variant="body2">Especie: {species}</Typography>
                <Typography sx={{ mt: 1.5 }} variant="body2">Estado: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/character/${id}`)} 
                >
                    Learn more
                </Button>
            </CardActions>
        </Card>
    )
}