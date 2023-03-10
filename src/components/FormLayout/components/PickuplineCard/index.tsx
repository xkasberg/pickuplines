import {Box, Typography} from "@mui/material";
import { forwardRef } from "react";


interface CardProps {
 data: string;
}

const PickuplineCard = forwardRef<HTMLElement, CardProps>((props, ref) => {
 
 const {data} = props;

 return (
 <Box component="section">
  <Typography color="pink" mx={5}>
   Try this one out...
  </Typography>
  <Typography mx={5} color="text.main">
   {data}
  </Typography>

 </Box>
)

});

export default PickuplineCard;