import { FunctionComponent } from "react";
import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	return (
		<AppBar  position="sticky"  sx={{bgcolor:'#4f46e5',height:'4rem',display:'flex',flexDirection:'row',gap:'2rem',justifyContent:'center',alignItems:'center',fontSize:'1.5rem'}} >
			<NavLink style={{textDecoration:'none',color:'white',}} to={""}>demo1</NavLink>
			<NavLink style={{textDecoration:'none',color:'white',}} to={""}>demo2</NavLink>
			<NavLink style={{textDecoration:'none',color:'white',}} to={""}>demo3</NavLink>
		</AppBar>
	);
};

export default Header;
