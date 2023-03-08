import {Box, Container, Grid, Typography } from '@mui/material';

interface ResponseProps {
 responseBody:string;
}

export default function Response(Props:ResponseProps) {
 return (
  <Box>
   <Typography>
    {Props.responseBody}
   </Typography>
  </Box>
 )
};