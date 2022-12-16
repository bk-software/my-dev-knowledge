import { Box } from "@mui/material";
import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<Box sx={{mt:'auto'}}>
			<h1>Footer</h1>
		</Box>
	);
};

export default Footer;
