import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<Header></Header>
			<Main></Main>
			<Footer></Footer>
		</Box>
	);
};

export default Layout;
