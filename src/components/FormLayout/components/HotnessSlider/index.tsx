import React, { forwardRef } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const marks = [
 {
   value: 0,
 },
 {
   value: 1,
 },
 {
   value: 2,
 },
 {
   value: 3,
 },
 {
   value: 4,
 },
 {
   value: 5,
 },
 {
   value: 6,
 },
 {
   value: 7,
 },
 {
   value: 8,
 },
 {
   value: 9,
 },
 {
   value: 10,
 },
];

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
 color: 'pink',
 height: 1,
 padding: '15px 0',
 '& .MuiSlider-thumb': {
   height: 16,
   width: 16,
   backgroundColor: '#fff',
   boxShadow: iOSBoxShadow,
   '&:focus, &:hover, &.Mui-active': {
     boxShadow:
       '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
     // Reset on touch devices, it doesn't add specificity
     '@media (hover: none)': {
       boxShadow: iOSBoxShadow,
     },
   },
 },
 '& .MuiSlider-valueLabel': {
   fontSize: 10,
   fontWeight: 'normal',
   top: -1,
   backgroundColor: 'unset',
   color: 'pink',
   '&:before': {
     display: 'none',
   },
   '& *': {
     background: 'transparent',
     color: 'pink',
   },
 },
 '& .MuiSlider-track': {
   border: 'none',
 },
 '& .MuiSlider-rail': {
   opacity: .5,
   backgroundColor: '#bfbfbf',
 },
 '& .MuiSlider-mark': {
   backgroundColor: '#bfbfbf',
   height: 8,
   width: 1,
   '&.MuiSlider-markActive': {
     opacity: 1,
     backgroundColor: 'currentColor',
   },
 },
}));

interface SliderProps {
  hotnessRef:React.RefObject<HTMLInputElement>;
}

const HotnessSlider = forwardRef<HTMLFormElement, SliderProps>((props, ref) => {

  return (
   <Box sx={{ width:"100%" }}>
     <Typography gutterBottom color={"#ACB2BE"}  fontSize=".875rem">crushes hotness...</Typography>
     <IOSSlider 
      aria-label="ios slider"
      max={10}
      min={1}
      step={1}
      defaultValue={5}
      marks={marks}
      valueLabelDisplay="on"  
     />
   </Box>
  )
});

export default HotnessSlider;