import { FormEvent } from 'react';
import { Grid, Box, Input, Button, Typography} from '@mui/material/';
import HotnessSlider from '../HotnessSlider';


interface FormProps {
  submitHandler: (event: FormEvent) => void
}

export default function Form ( Props:FormProps ) {

 return (
  <Box>

    <Grid container justifyContent="center" mb={4} mt={6}>
      <Grid item xs={12} md={6}>
        <Input placeholder="crushes name..." fullWidth />
      </Grid>
    </Grid>

    <Grid container justifyContent="center" mb={2}>
      <Grid item xs={12} md={6}>
        <HotnessSlider />
      </Grid>
    </Grid>

    <Grid container justifyContent="center" mb={4}>
      <Grid item xs={12} md={6}>
        <Input
          placeholder="crushes bio..."
          fullWidth
          multiline
          rows={6}
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
        />
      </Grid>
    </Grid>

    <Grid container justifyContent="center" mb={4} mt={4}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={Props.submitHandler}
        >
          Generate
        </Button>
    </Grid>

  </Box>
 )
};

