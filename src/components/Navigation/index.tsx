
import React from 'react';
import { Box, Grid, Container, Link, Typography} from '@mui/material';


const NavBar: React.FC = () => {
 return (
   <Box component="nav" position="absolute" top="0.25rem" width="100%">
     <Container>
       <Grid container flexDirection="row" alignItems="center">
         <Typography
           component={Link}
           href="/"
           variant="button"
           color="pink"
           fontWeight="light"
           textTransform={"none"}
           py={0.8125}
           mr={2}
           sx= {{
            "textDecoration": "none"
           }
           }
         >
           pickuplines.ai
         </Typography>
       </Grid>
     </Container>
   </Box>
 );
}

export default NavBar