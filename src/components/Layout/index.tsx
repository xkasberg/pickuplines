
import { Box } from "@mui/material";

import NavBar from "../NavBar";
import Footer from "../Footer";
import FormLayout from "../FormLayout";
import routes from '../../footer.routes';

const Layout = () => {
 return (
  <Box sx={{}}>
   <NavBar />
   <FormLayout />
   <Footer {...routes} />
  </Box>
 );
}

export default Layout