import { Box, Container } from "@mui/material";
import { FunctionComponent } from "react";



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
