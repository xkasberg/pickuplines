import { FormEvent, useState } from 'react';
import { Box, Container, Grid} from '@mui/material';

import PickuplineCard from './components/PickuplineCard';
import FormCard from './components/FormCard';

function FormLayout() {
  // const [double, setDouble] = useState(false);
  const [submit, setSubmit] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmit(true);
  }

  return (
    <Box component="section" justifyContent="center" py={12}>
      <Container>
        <Box >
          <Grid
            container
            item
            justifyContent="center"
            xs={12}
            lg={8}
            sx={{ mx: "auto" }}
          >
            <Box width="80%" component="form" method="post" border={1} borderRadius='16px' borderColor='pink' >
                { submit ? <PickuplineCard /> : <FormCard submitHandler={handleSubmit} /> } 
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default FormLayout;