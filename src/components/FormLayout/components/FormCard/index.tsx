import React, { FormEvent, forwardRef, useState } from 'react';
import { Grid, Box, Typography, Input, TextField, Button} from '@mui/material/';
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

 const [ error, setError ] = useState(false);
 
 function validateForm (e:FormEvent) {
  
  e.preventDefault();

  const name = nameRef.current?.value;

  if ( name === '') {
    setError(true);
    console.log("invalid")
  } else {
    submitHandler(e);
  }

 }

 return (
  <Box sx={{mx:"5%"}}>
      <Grid container justifyContent="center" mb={4} mt={6}>
        <Grid item xs={12} md={6}>
          { error ? <Input placeholder="crushes name..." fullWidth required inputRef={nameRef} error/> : <TextField placeholder="crushes name..." fullWidth required inputRef={nameRef} variant='standard' /> }
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
            type="submit"
            onClick={validateForm}
          >
            <Typography fontSize="inherit">Generate</Typography>
          </Button>
      </Grid> 

  </Box>
 )
});

export default Form;