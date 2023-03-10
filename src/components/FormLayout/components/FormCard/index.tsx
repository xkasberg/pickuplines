import React, { FormEvent, forwardRef } from 'react';
import { Grid, Box, Input, Button} from '@mui/material/';
import HotnessSlider from '../HotnessSlider';


interface FormProps {
  nameRef: React.RefObject<HTMLInputElement>;
  bioRef:React.RefObject<HTMLInputElement>;
  infoRef:React.RefObject<HTMLInputElement>;
  hotnessRef:React.RefObject<HTMLInputElement>;
  submitHandler: (event: FormEvent) => void
}

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {

 const { nameRef, bioRef, infoRef, hotnessRef, submitHandler } = props;
 
 return (
  <Box sx={{mx:"5%"}}>
    <Grid container justifyContent="center" mb={4} mt={6}>
      <Grid item xs={12} md={6}>
        <Input placeholder="crushes name..." fullWidth required={true} inputRef={nameRef} />
      </Grid>
    </Grid>
    <Grid container justifyContent="center" mb={2}>
      <Grid item xs={12} md={6}>
        <HotnessSlider hotnessRef={hotnessRef} />
      </Grid>
    </Grid>
    <Grid container justifyContent="center" mb={4}>
      <Grid item xs={12} md={6}>
        <Input
          placeholder="crushes bio..."
          fullWidth
          multiline
          rows={6}
          inputRef={bioRef}
        />
      </Grid>
    </Grid>
    <Grid container justifyContent="center" mb={2}>
      <Grid item xs={12} md={6}>
        <Input
          placeholder="extra info..."
          fullWidth
          multiline
          rows={3}
          inputRef={infoRef}
        />
      </Grid>
    </Grid>
    <Grid container justifyContent="center" mb={4} mt={4}>
        <Button
          variant="outlined"
          color="primary"
          onClick={submitHandler}
        >
          Generate
        </Button>
    </Grid>
  </Box>
 )
});

export default Form;