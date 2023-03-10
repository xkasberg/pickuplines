
import { Box } from "@mui/material";

import NavBar from "../NavBar";
import Footer from "../Footer";
import FormLayout from "../FormLayout";
import routes from '../../footer.routes';

import logo from '../../assets/laugh.svg';


const Layout = () => {
 console.log(logo);
 return (
  <Box sx={{
   backgroundImage:{logo},
   backgroundSize:"100%"
   }}>
   <NavBar />
   <FormLayout />
   <Footer {...routes} />
   <Box sx={{backgroundImage:{logo}}} />

  </Box>
  
 );
}

export default Layout