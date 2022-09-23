import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import imgEnigma1 from '../assets/images/enigma-1-final.png';
import imgEnigma2 from '../assets/images/enigma-2-final.png';
import imgEnigma3 from '../assets/images/enigma-3-final.png';
import imgEnigma4 from '../assets/images/enigma-4-final.png';
import imgEnigma5 from '../assets/images/enigma-5-final.png';
import imgEnigma6 from '../assets/images/enigma-6-final.png';
import imgEnigma7 from '../assets/images/enigma-7-final.png';
import Box from '@mui/material/Box';
import * as HindingPlaces from './HidingPlaces'

export default function EnigmaForm(props) {
  const [response, setResponse] = React.useState('');
  const [password, setPassword] = React.useState('');

  const enigmasList = [
    {
      id: 1,
      clue: `Vous découvrirez le premier de ces indices dans ${HindingPlaces.place1}`,
      password: 'matamou',
      description: 'Le premier indice que nous cherchons est entouré par quatre oiseaux (au-dessus, au-dessous, à sa droite et à sa gauche). Le voyez-vous ?',
      srcImg: imgEnigma1,
      response: 'arbre'
    },
    {
      id: 3,
      clue: `Vous découvrirez le deuxième indice dans ${HindingPlaces.place2}`,
      password: 'alunira',
      description: 'Observez bien l\'expression du visage des deux graines magiques parfaitement identiques. Ce deuxième indice vous servira tout à l’heure pour deviner dans quel village d’animaux se trouve le livre sacré.',
      srcImg: imgEnigma2,
      response: 'grimace'
    },
    {
      id: 4,
      clue: `Vous découvrirez le troisième indice dans ${HindingPlaces.place3}`,
      password: 'jungle',
      description: 'Quel fruit doit remplacer le point d’interrogation dans cette série ? Il s’agit de votre troisième et dernier indice.',
      srcImg: imgEnigma3,
      response: 'banane'
    },
    {
      id: 5,
      clue: `Vous découvrirez le quatrième indice dans ${HindingPlaces.place4}`,
      password: 'hibou',
      description: 'Les Singes sont terrorisés ! Des animaux les ont forcés à voler le livre, mais ils ont trop peur de nous révéler leur nom. Ces crapules sont reparties avec le livre sacré il y a tout juste dix minutes. Nous avons montré aux Singes la photo de quatre animaux que nous pensons capables d’un tel acte. Ils nous ont répondu que le coupable figurait bien parmi ces quatre animaux et qu’il ne ressemblait pas à un cheval. Cela devrait déjà vous permettre d’innocenter, puis de rayer, un de ces suspects. Continuez ensuite votre enquête pour découvrir plus d’informations sur les odieux animaux qui sont en possession du livre.',
      srcImg: imgEnigma4,
      response: 'zèbre'
    },
    {
      id: 7,
      clue: `Vous découvrirez le cinquième indice dans ${HindingPlaces.place5}`,
      password: 'livre',
      description: 'Voici un nouvel animal à rayer sur votre feuille. Il vient d’être pris en photo depuis l’endroit où il passe ses vacances. Il n’a donc pas pu voler le livre sacré. Le voyez-vous ?',
      srcImg: imgEnigma5,
      response: 'perroquet'
    },
    {
      id: 8,
      clue: `Vous découvrirez le sixième indice dans ${HindingPlaces.place6}`,
      password: 'savane',
      description: 'Les loups ont peur de l’eau et les rhinocéros ont peur des serpents. Celui qui n’a pas pu accéder au village des Singes est innocent, tandis que l’autre est le coupable de votre histoire. À vous de jouer !',
      srcImg: imgEnigma6,
      response: 'loup'
    },
    {
      id: 10,
      clue: `Vous découvrirez le septième indice dans ${HindingPlaces.place7}`,
      password: 'magie',
      description: 'Nous avons retrouvé la trace de la meute des loups. Tentons de les endormir en leur lançant des fléchettes de somnifères. Nous pourrons ainsi récupérer le livre. Levez un feutre au-dessus de la tête, choisissez un loup puis fermez les yeux. Descendez tout doucement le feutre jusqu’à ce qu’il touche la feuille. Ouvrez les yeux puis observez si vous avez touché un loup. Passez ensuite le feutre à un coéquipier. Quand tous les loups ont été touchés, vous avez réussi la mission.',
      srcImg: imgEnigma7,
      response: 'trésor'
    },
  ];
  const [animate, setAnimate] = React.useState(false);
  const [showEnigma, setShowEnigma] = React.useState(false)

  const activeEnigma = enigmasList.find((element) => {
    return element.id === props.activeStep;
  })

  const verifyPassword = () => {
    if (password === activeEnigma.password) {
      setShowEnigma(true);
    }
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSubmit = (event) => {
    setAnimate(false);

    if (response.toLowerCase() === activeEnigma.response) {
      props.handleNext();
    } else {
      setAnimate(true);
    }

    event.preventDefault();
  }

  return (
    <React.Fragment>
      {showEnigma ? (
        <Grid
          spacing={3}
          container
          direction="column"
          justifyContent="center"
        >
          <Grid item>
            <Box sx={{textAlign: 'center', fontSize: 18}}>
              {activeEnigma.description}
            </Box>
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit}>
              <Grid
                spacing={3}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <FormControl variant="standard">
                    <TextField 
                      label="réponse"
                      color="secondary"
                      focused
                      value={response}
                      onChange={handleChange}
                      className={"" + (animate ? 'animate__animated animate__shakeX' : '')}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant="standard">
                    <Button variant="contained" size="large" type='submit'>
                      Répondre
                    </Button>
                  </FormControl>          
                </Grid>
              </Grid>
            </form> 
          </Grid>
          <Grid item>
            <div className='img-wrapper'>
              <img src={activeEnigma.srcImg} alt='enigma'></img>
            </div>
          </Grid>
        </Grid>
      ):(
        <React.Fragment>
          <p style={{fontSize: 18}}>{activeEnigma.clue}</p>
          <Grid
            spacing={3}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <FormControl variant="standard">
                <TextField 
                  label="Mot de passe"
                  color="secondary"
                  focused
                  value={password}
                  onChange={handleChangePassword}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl variant="standard">
                <Button variant="contained" size="large" onClick={verifyPassword}>
                  Débloquer
                </Button>
              </FormControl>          
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}