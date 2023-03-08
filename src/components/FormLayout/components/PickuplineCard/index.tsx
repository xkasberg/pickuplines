import {Box, Typography} from "@mui/material";

import ResponseBody from './ResponseBody';

export default function PickuplineCard () {
 return (
  <Box component="section" justifyContent="center">
   <Typography color="pink">
    Try this one out...
   </Typography>
   <ResponseBody responseBody={"hello there"} />

  </Box>
 )
};