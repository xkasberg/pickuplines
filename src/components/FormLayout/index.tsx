import { FormEvent, useState, useRef} from 'react';
import { Box, Container, Grid } from '@mui/material';


import PickuplineCard from './components/PickuplineCard';
import FormCard from './components/FormCard';


export default function FormLayout() {

  const nameInputRef = useRef<HTMLInputElement>(null);
  const bioInputRef = useRef<HTMLInputElement>(null);
  const infoInputRef = useRef<HTMLInputElement>(null);
  const hotnessInputRef = useRef<HTMLInputElement>(null);

  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState('');

  const ws = new WebSocket("wss://api.isomorphi.cloud/generate");
  
  const handleWebSocketMessage = (event:MessageEvent) => {
    const token = event.data;
    setData((prevData) => prevData + token);
  };

  ws.addEventListener('message', handleWebSocketMessage);
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmit(true);
    const enteredName = nameInputRef.current?.value;
    const enteredBio = bioInputRef.current?.value;
    const enteredInfo = infoInputRef.current?.value;
    const enteredHotness = hotnessInputRef.current?.value;
    const formData = {
      name: enteredName,
      bio: enteredBio,
      info: enteredInfo,
      hotness: enteredHotness
    }
    ws.send(JSON.stringify(formData));
  }

  return (
    <Box component="section" justifyContent="center" py={12} mb={1}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          lg={8}
          sx={{ mx: "auto" }}
        >
          <Box width="100%" component="form" method="post" border={1} borderRadius='16px' borderColor='pink'>
              { submit ? <PickuplineCard data={data} /> : <FormCard nameRef={nameInputRef} bioRef={bioInputRef} infoRef={infoInputRef} hotnessRef={hotnessInputRef} submitHandler={handleSubmit} /> } 
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
