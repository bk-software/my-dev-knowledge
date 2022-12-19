import { Typography,Link } from "@mui/material";
import { FunctionComponent } from "react";

interface CopyrightProps {}

const Copyright: FunctionComponent<CopyrightProps> = () => {
	return (
		<>
			<Typography
				variant="body2"
				color="text.secondary"
				align="center"
                sx={{mt:2}}
			>
				{"Copyright © "}
				<Link
					color="inherit"
					href="https://github.com/bk-software/my-dev-knowledge"
				>
					myDevKnowledge
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		</>
	);
};

export default Copyright;
