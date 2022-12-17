import { Box, Container } from "@mui/material";
import { FunctionComponent } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface MainProps {
    
}
 
const Main: FunctionComponent<any> = ({children}) => {
    return ( 
        <Container>
        <Box sx={{ mt: 4 }}>{children}</Box>

      </Container>
     );
}
 
export default Main;

{/* <Typography variant="h5" color="text.secondary">
since: 2021
</Typography> */}