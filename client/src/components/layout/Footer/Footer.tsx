import { AppBar } from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	return (
		<AppBar position="relative"  sx={{mt:'auto',bgcolor:'#4f46e5',height:'4rem',display:'flex',flexDirection:'row',gap:'2rem',justifyContent:'center',alignItems:'center',fontSize:'1.5rem'}} >
		<NavLink style={{textDecoration:'none',color:'white',marginTop:'0.7rem'}} to={""}><FacebookIcon  /></NavLink>
		<NavLink style={{textDecoration:'none',color:'white',marginTop:'0.7rem'}} to={""}><InstagramIcon /></NavLink>
		<NavLink style={{textDecoration:'none',color:'white',marginTop:'0.7rem'}} to={""}><LinkedInIcon /></NavLink>
	</AppBar>
	);
};

export default Footer;
