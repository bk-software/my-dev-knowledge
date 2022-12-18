import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface ProfilePageProps {
    
}
 
const ProfilePage: FunctionComponent<ProfilePageProps> = () => {
    return ( 
        <Box sx={{display:'block'}}  component='main'>
            <Typography component='h2' variant="h2">Ori Guy's Profile</Typography>
        </Box>
     );
}
 
export default ProfilePage;