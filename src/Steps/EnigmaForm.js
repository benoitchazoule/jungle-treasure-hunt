import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export default function EnigmaForm(props) {
  const [response, setResponse] = React.useState('');

  const handleChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(props.activeStep);
    switch(props.activeStep) {
      case 0:
        if (response.toLowerCase() === 'arbre') {
          props.handleNext();
        }
        break;
      default:
      // do nothing
    }
    console.log(response);
    event.preventDefault();
  }

  return (
    <div style={{ textAglin: 'center' }}>
      <img src={require('../assets/images/enigma-1-final.png')} alt='enigma 1'></img>
      <form onSubmit={handleSubmit}>
        <FormControl variant="standard">
          <TextField label="réponse" color="secondary" focused value={response} onChange={handleChange} />
        </FormControl>
        <FormControl variant="standard">
          <Button variant="contained" size="large" type='submit'>
            Répondre
          </Button>
        </FormControl>
      </form>
    </div>
  );
}