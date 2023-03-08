
import {Box, Grid} from "@mui/material";

import NavBar from "../Navigation";
import Header from "../Header";
import Footer from "../Footer";
import FormLayout from "../FormLayout";
import routes from '../../footer.routes';

const Layout = () => {
 return (
  <Box>
   <NavBar />
   <Header />
   <FormLayout />
   <Box width="100%" position="absolute" zIndex={2} bottom="1.625rem">
    <Footer {...routes} />
   </Box>
   
  </Box>
 );
}

export default Layout