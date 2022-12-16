import { Box, CssBaseline } from "@mui/material";
import { FunctionComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

interface LayoutProps {}

const Layout: FunctionComponent<any> = ({children}) => {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<CssBaseline />
			<Header></Header>
			<Main>{children}</Main>
			<Footer></Footer>
		</Box>
	);
};

export default Layout;
