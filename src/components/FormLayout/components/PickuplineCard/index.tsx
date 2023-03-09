import {Box, Typography} from "@mui/material";
import { forwardRef } from "react";


interface CardProps {
 data: string;
}

const PickuplineCard = forwardRef<HTMLElement, CardProps>((props, ref) => {
 
 const {data} = props;

 return (
 <Box component="section" justifyContent="center">
  <Typography color="pink">
   Try this one out...
  </Typography>
  <Typography>
   {data}
  </Typography>

 </Box>
)

});

export default PickuplineCard;